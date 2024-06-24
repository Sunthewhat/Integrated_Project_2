import 'package:c_trade/local_storage.dart';
import 'package:c_trade/pages/trade_page.dart';
// import 'package:c_trade/pages/loading_page.dart';
// import 'package:c_trade/pages/trade_success.dart';
import 'package:flutter/material.dart';
// import 'package:c_trade/pages/trade_page.dart';
import 'package:c_trade/pages/trade_confirmation.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await LocalStorage.init();
  // await LocalStorage.clear();
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
        home: TradePage(),
      ),
    );
  }
}
