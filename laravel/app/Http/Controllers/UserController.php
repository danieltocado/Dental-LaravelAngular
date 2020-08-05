<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getBirthdate(){
        $user = Auth::user();
        $birthdate = new Carbon($user->birthdate); //fecha cumple
        $now = Carbon::now(); //fecha hoy
        $difference = ($birthdate->diff($now)-> days < 1)
            ? 'today is your birthdate! :)'
            : $birthdate->diffForHumans($now);
        return ['message' => 'Hi '. $user->name.' '. $difference . ' days remaining for your bithdate.'];
    }
}
