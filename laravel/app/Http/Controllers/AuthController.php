<?php
namespace App\Http\Controllers;

use App\Mail\ResetPassword;
use App\User;

use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $body = $request->all();
        $validator = Validator::make($body, [
            'name' => 'string',
            'surname' => 'string',
            'email' => 'required|string|unique:users',
            'birthdate' => 'string',
            'password' => 'required|string',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'message' => 'There was a problem trying to register the user'
            ], 400);
        }
        $user = new User([
            'name'     => $request->name,
            'surname'  => $request->surname,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
            'birthdate' => $request->birthdate,
        ]);
        $user->save();
        return response()->json([
            'message' => 'Successfully created user!', $user], 201);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',
            'remember_me' => 'boolean',
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type'   => 'Bearer',
            'expires_at'   => Carbon::parse(
                $tokenResult->token->expires_at)
                    ->toDateTimeString(),
            $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' =>
            'Successfully logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    public function sendResetPasswordEmail($email)
    {
        $user = User::where('email',$email)->first();
        if($user)
        {
            Mail::to($email)->send(new ResetPassword($user));
        }

        return ['message' => 'An email was sent to your email box'];
    }
}
