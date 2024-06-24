import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/card.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';

class TradePage extends StatefulWidget {
  const TradePage({super.key});

  @override
  State<TradePage> createState() => _TradePageState();
}

class _TradePageState extends State<TradePage> {
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
                child: Column(
              children: [RearrangeBar()],
              
            )),
          )),
    );
  }
}

class RearrangeBar extends StatelessWidget {
  const RearrangeBar({
    super.key,
  });
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 20, bottom: 10),
      child: const TopBar(title: "Trade"),
    );
  }
}
