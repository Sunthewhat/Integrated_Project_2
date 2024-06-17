import 'package:c_trade/pages/signin_page.dart';
import 'package:flutter/material.dart';

class LoadingPage extends StatefulWidget {
  const LoadingPage({super.key});

  @override
  State<LoadingPage> createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 0), handleLogin);
  }

  void handleLogin() {
    Navigator.of(context).pushReplacement(MaterialPageRoute(
      builder: (context) => const SignInPage(),
    ));
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
        child: const FractionallySizedBox(
          widthFactor: 1,
          heightFactor: 1,
          child: Center(
            child: CircularProgressIndicator(
              valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
            ),
          ),
        ),
      ),
    );
  }
}
