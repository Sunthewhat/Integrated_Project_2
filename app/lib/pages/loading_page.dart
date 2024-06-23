import 'package:flutter/material.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/pages/signin_page.dart';

class LoadingPage extends StatefulWidget {
  const LoadingPage({super.key});

  @override
  State<LoadingPage> createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> {
  @override
  void initState() {
    super.initState();
    _checkIsLoggedIn();
  }

  void _checkIsLoggedIn() async {
    // await Future.delayed(const Duration(seconds: 1));
    final isLoggedIn = LocalStorage.getLoggedIn();

    // Schedule the navigation to happen after the current frame
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (isLoggedIn == null || !isLoggedIn) {
        _handleLogin();
      } else {
        _handleHome();
      }
    });
  }

  void _handleLogin() {
    Navigator.of(context).pushReplacement(MaterialPageRoute(
      builder: (context) => const SignInPage(),
    ));
  }

  void _handleHome() {
    Navigator.of(context).pushReplacement(MaterialPageRoute(
      builder: (context) => const HomePage(),
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
