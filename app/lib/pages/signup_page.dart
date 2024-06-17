import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SignUpPage extends StatefulWidget {
  const SignUpPage({super.key});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  bool _isPasswordVisible = false;
  bool _isTermsAgreed = false;

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
                'assets/images/background/create_account_bottom.png',
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
                      'Create Account',
                      style: GoogleFonts.lemonada(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const Divider(
                      color: Color(0xFFD2D79F),
                      thickness: 1,
                    ),
                    TextField(
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: const Color(0xFFD2D79F),
                        border: const OutlineInputBorder(
                            borderSide: BorderSide.none),
                        hintText: 'Username',
                        hintStyle: GoogleFonts.lexendDeca(
                          color: Colors.grey,
                        ),
                      ),
                    ),
                    TextFormField(
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: const Color(0xFFD2D79F),
                        border: const OutlineInputBorder(
                            borderSide: BorderSide.none),
                        hintText: 'Password',
                        hintStyle: GoogleFonts.lexendDeca(
                          color: Colors.grey,
                        ),
                        suffixIcon: IconButton(
                          icon: Padding(
                            padding: const EdgeInsets.only(right: 8.0),
                            child: Icon(
                              _isPasswordVisible
                                  ? Icons.visibility
                                  : Icons.visibility_off,
                              color: const Color(0xFF42855B),
                            ),
                          ),
                          onPressed: () {
                            setState(() {
                              _isPasswordVisible = !_isPasswordVisible;
                            });
                          },
                        ),
                      ),
                      obscureText: !_isPasswordVisible,
                    ),
                    TextFormField(
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: const Color(0xFFD2D79F),
                        border: const OutlineInputBorder(
                            borderSide: BorderSide.none),
                        hintText: 'Confirm Password',
                        hintStyle: GoogleFonts.lexendDeca(
                          color: Colors.grey,
                        ),
                      ),
                      obscureText: !_isPasswordVisible,
                    ),
                    Row(
                      children: [
                        Checkbox(
                            value: _isTermsAgreed,
                            onChanged: (bool? e) {
                              setState(() {
                                _isTermsAgreed = e!;
                              });
                            }),
                        Text(
                          'I agree to the ',
                          style: GoogleFonts.lexendDeca(
                            color: Colors.grey,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        InkWell(
                          onTap: () {},
                          child: Text(
                            'Terms and Conditions',
                            style: GoogleFonts.lexendDeca(
                              color: const Color(0xFF42855B),
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        )
                      ],
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
                            'Confirm',
                            textAlign: TextAlign.center,
                            style: GoogleFonts.lexendExa(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
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
  runApp(const MaterialApp(home: SignUpPage()));
}
