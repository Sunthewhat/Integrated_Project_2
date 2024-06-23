import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/card.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';

class TradePage extends StatefulWidget {
  const TradePage({super.key});

  @override
  State<TradePage> createState() => _TradePageState();
}

class _TradePageState extends State<TradePage>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background/whole.png'),
            fit: BoxFit.cover,
            
          ))));}}

//  @override
//   Widget build(BuildContext context) {
//     return Container(
//       margin: const EdgeInsets.only(top: 20, bottom: 10),
//       child: const TopBar(title: "TradePage")
//     );
//   }
// }


//components
//  @override
//   Widget build(BuildContext context) {
//     return Container(
//       margin: const EdgeInsets.only(bottom: 10),
//       child: const Text(
//         "Total  <amount> Certificates with <amount> kgCO2eq ",
//         style: TextStyle(
//           color: Colors.white,
//           fontSize: 14,
//         ),
//       ),
//     );
//   }








// class TradeCard extends StatefulWidget {
//   final String companyName;
//   final String amount;

//   const TradeCard{{
//     super.key,
//     required this.companyName;
//     required this.amount;
//   }};

//  @override
//   Widget build(BuildContext context) {
//     return Padding(
// }
// }



















