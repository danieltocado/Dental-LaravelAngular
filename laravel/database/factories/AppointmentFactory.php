<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Appointment;
use Faker\Generator as Faker;

$factory->define(Appointment::class, function (Faker $faker) {
    return [
        'appointment_date' => $faker->appointment_date,
        'appointment_type' => $faker->appointment_type,
        'user_id' => $faker->user_id,

    ];
});
