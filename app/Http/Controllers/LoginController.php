<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  public function authenticate(Request $request)
  {
    $credentials = $request->validate([
      'email' => ['required', 'email'],
      'password' => ['required'],
    ]);

    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();
      $user = Auth::user();
      $token = $user->createToken('test')->plainTextToken;
      return response()->json([
        'user' => $user,
        'userToken' => $token
      ]);
    }

    return response()->json([
      'errors' => [
        'email' => 'The provided credentials do not match our records.',
      ]
    ], 422);
  }
}
