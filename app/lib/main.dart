import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/pages/loading_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const CTrade());
}

class CTrade extends StatelessWidget {
  const CTrade({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScopeNode currentFocus = FocusScope.of(context);
        if (!currentFocus.hasPrimaryFocus &&
            currentFocus.focusedChild != null) {
          currentFocus.focusedChild!.unfocus();
        }
      },
      child: const MaterialApp(
        debugShowCheckedModeBanner: false,
        home: LoadingPage(),
      ),
    );
  }
}