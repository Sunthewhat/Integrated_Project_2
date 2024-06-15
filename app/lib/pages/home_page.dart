import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
          child: SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.only(top: 30),
              child: Column(
                children: [
                  Text('Hello, World!',
                      style: TextStyle(color: Colors.white, fontSize: 24)),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
