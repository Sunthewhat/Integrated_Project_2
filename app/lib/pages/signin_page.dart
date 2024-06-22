import 'package:flutter/material.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/api/auth/login.dart';
import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/pages/signup_page.dart';
import 'package:google_fonts/google_fonts.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  void handleSignUp() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => const SignUpPage(),
      ),
    );
  }

  void handleLogin() {
    String username = _usernameController.text;
    String password = _passwordController.text;
    Future<void> setUserId;
    Future<void> clearPassword;
    Future<void> setLoggedInStatus;

    if (username.isEmpty || password.isEmpty) {
      handleShowError('Please fill in all fields');
    } else {
      Login.login(username, password).then(
        (value) async => {
          if (value.success)
            {
              clearPassword = LocalStorage.clearPassword(),
              setLoggedInStatus = LocalStorage.setLoggedIn(true),
              setUserId = LocalStorage.setUserId('${value.data!.userId}'),
              await setUserId,
              await clearPassword,
              await setLoggedInStatus,
              handleHomePage(),
            }
          else
            {
              handleShowError(value.message),
            }
        },
      );
    }
  }

  void handleHomePage() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => const HomePage(),
      ),
    );
  }

  void handleShowError(String message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Error'),
          content: Text(message),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background/whole.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: Stack(
          children: [
            Align(
              alignment: Alignment.bottomCenter,
              child: Image.asset(
                'assets/images/background/signin_bottom.png',
                fit: BoxFit.cover,
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Padding(
                padding:
                    EdgeInsets.all(MediaQuery.of(context).size.width * 0.1),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    for (int i = 0; i < 30; i++) const SizedBox(),
                    Text(
                      'Sign in',
                      style: GoogleFonts.lemonada(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(),
                    Row(
                      children: [
                        Text(
                          'New user? ',
                          // style: TextStyle(color: Color(0xFFD2D79F)),
                          style: GoogleFonts.lexendDeca(
                              color: const Color(0xFFD2D79F),
                              fontWeight: FontWeight.w500),
                        ),
                        InkWell(
                          onTap: handleSignUp,
                          child: Text(
                            'Create an account',
                            // style: TextStyle(color: Color(0xFF42855B)),
                            style: GoogleFonts.lexendDeca(
                                color: const Color(0xFF42855B),
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                      ],
                    ),
                    TextField(
                      controller: _usernameController,
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: const Color(0xFFD2D79F),
                        border: const OutlineInputBorder(
                            borderSide: BorderSide.none),
                        hintText: 'Username',
                        hintStyle: GoogleFonts.lexendDeca(),
                      ),
                    ),
                    TextField(
                      controller: _passwordController,
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: const Color(0xFFD2D79F),
                        border: const OutlineInputBorder(
                            borderSide: BorderSide.none),
                        hintText: 'Password',
                        hintStyle: GoogleFonts.lexendDeca(),
                      ),
                      obscureText: true,
                    ),
                    InkWell(
                      onTap: handleLogin,
                      child: Container(
                        width: double.infinity,
                        height: MediaQuery.of(context).size.width * 0.1,
                        decoration: const BoxDecoration(
                          color: Color(0xFF42855B),
                        ),
                        child: Center(
                          child: Text(
                            'Sign In',
                            textAlign: TextAlign.center,
                            style: GoogleFonts.lexendDeca(
                              color: Colors.white,
                              fontWeight: FontWeight.w500,
                              fontSize: 16,
                            ),
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(const MaterialApp(home: SignInPage()));
}
