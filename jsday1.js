function minimal(a, b) {
    if(a === b) {
        return a
    } else if(a < b) {
        return a
    } else {
        return b
    }
}

console.log(minimal(3, 5))
console.log(minimal(9, 7))
console.log(minimal(1, 1))

function findIndex(array, number) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === number) {
            return i
        }
    }
    return -1
}
console.log(findIndex([1,2,3,4,5], 3));
console.log(findIndex([1,2,3,4,5], 6));
console.log(findIndex([1,2,3,4,5], 4));


// <?php

// namespace App\Http\Controllers;

// use App\Models\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;

// class AuthController extends Controller
// {
//     public function register(Request $request)
//     {
//         $validatedData = $request->validate([
//             'name' => 'required|string',
//             'email' => 'required|email|unique:users',
//             'password' => 'required|string|min:6',
//         ]);

//         $user = User::create([
//             'name' => $validatedData['name'],
//             'email' => $validatedData['email'],
//             'password' => Hash::make($validatedData['password']),
//         ]);

//         return response()->json(['message' => 'User registered successfully']);
//     }

//     public function login(Request $request)
//     {
//         $credentials = $request->only('email', 'password');

//         $user = User::where('email', $credentials['email'])->first();

//         if (!$user || !Hash::check($credentials['password'], $user->password)) {
//             return response()->json(['message' => 'Invalid credentials'], 401);
//         }

//         // Generate token secara manual
//         $token = base64_encode($user->email . ':' . $credentials['password']);

//         return response()->json(['token' => $token]);
//     }

//     public function logout(Request $request)
//     {
//         // Implementasikan sesuai kebutuhan Anda, misalnya menghapus token yang disimpan oleh klien
//         return response()->json(['message' => 'Logout successful']);
//     }
// }

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

// Route::post('register', 'AuthController@register');
// Route::post('login', 'AuthController@login');

// Route::group(['middleware' => 'auth'], function () {
//     Route::post('logout', 'AuthController@logout');
//     Route::get('user', function (Request $request) {
//         return $request->user();
//     });
// });

// protected $routeMiddleware = [
//     // ...
//     'auth' => \App\Http\Middleware\Authenticate::class,
// ];


//$hashedPassword = Hash::make(md5($plaintext));

// $plaintext = 'password123';
// $hashedPassword = '$2y$10$Pj12tB8I7l9vyeZ35UV8DOQ6MldouUjR.9kAEtXDE4r5kMfA2sjA6';

// if (Hash::check(md5($plaintext), $hashedPassword)) {
//     // Password cocok
// } else {
//     // Password tidak cocok
// }

// https://youtube.com/playlist?list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd
