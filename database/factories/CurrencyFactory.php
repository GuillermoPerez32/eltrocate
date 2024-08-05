<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Currency>
 */
class CurrencyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ecu' => $this->faker->randomNumber(3),
            'usd' => $this->faker->randomNumber(3),
            'mlc' => $this->faker->randomNumber(3),
            'mxn' => $this->faker->randomNumber(3),
        ];
    }
}
