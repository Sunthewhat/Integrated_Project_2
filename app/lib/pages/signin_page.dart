import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
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
                'assets/images/background/auth_bottom.png',
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
                          'New user?',
                          // style: TextStyle(color: Color(0xFFD2D79F)),
                          style: GoogleFonts.lexendDeca(
                              color: const Color(0xFFD2D79F),
                              fontWeight: FontWeight.w500),
                        ),
                        InkWell(
                          onTap: () {},
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
                      onTap: () {},
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
