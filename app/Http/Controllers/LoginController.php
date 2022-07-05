<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
  /**
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function login(Request $request): JsonResponse
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

  /**
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function register(Request $request): JsonResponse
  {
    try {
      $data = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
      ]);

      $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password']),
      ]);

      return response()->json([
        'message' => 'User registered with email:' . $user->email
      ]);

    } catch (ValidationException $validationException) {
      return response()->json($validationException->errors());
    } catch (Exception $exception) {
      return response()->json($exception->getMessage());
    }
  }

  public function logout(Request $request): JsonResponse
  {
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return response()->json('Successfully logged out');
  }
}
