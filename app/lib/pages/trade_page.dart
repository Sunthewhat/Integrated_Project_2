import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/card.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

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
                child: Column(children: [
              RearrangeBar(),
              FillAmount(),
              TradeBoxInform(),
              ChooseTrader(),
              TraderCard(
                title: '',
                cert: '',
                date: '',
              )
            ])),
          )),
      bottomNavigationBar: const BottomNavBar(
        pageName: 'trade',
      ),
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

class FillAmount extends StatelessWidget {
  const FillAmount({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: MediaQuery.of(context).size.height * 0.03,
        ),
        FractionallySizedBox(
          widthFactor: 1,
          child: Text(
            'Fill Your Retail Amount',
            style: GoogleFonts.lexendPeta(
              color: const Color(0xFFD2D79F),
              fontSize: 16,
              fontWeight: FontWeight.w400,
            ),
            textAlign: TextAlign.left,
          ),
        ),
        const Divider(
          color: Color(0xFFD2D79F),
          thickness: 1,
        ),
      ],
    );
  }
}

class ChooseTrader extends StatelessWidget {
  const ChooseTrader({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: MediaQuery.of(context).size.height * 0.03,
        ),
        FractionallySizedBox(
          widthFactor: 1,
          child: Text(
            'Choose Your Trader',
            style: GoogleFonts.lexendPeta(
              color: const Color(0xFFD2D79F),
              fontSize: 16,
              fontWeight: FontWeight.w400,
            ),
            textAlign: TextAlign.left,
          ),
        ),
        const Divider(
          color: Color(0xFFD2D79F),
          thickness: 1,
        ),
      ],
    );
  }
}

class TradeBoxInform extends StatelessWidget {
  const TradeBoxInform({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Container(
        width: MediaQuery.of(context).size.height * 0.48,
        height: MediaQuery.of(context).size.height * 0.4,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: const Color(0xFFD2D79F),
          ),
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(
            color: Color(0xFFD2D79F),
          ),
        ),
      )
    ]);
  }
}

class InformationToTrade extends StatelessWidget {
  List<String> preferTrade = ['+-100', '+-200', '+-500', '+-1,000'];

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Container(
        width: MediaQuery.of(context).size.height * 0.48,
        height: MediaQuery.of(context).size.height * 0.4,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: const Color(0xFFD2D79F),
          ),
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(
            color: Color(0xFFD2D79F),
          ),
        ),
      ),
      TextButton(
          style: TextButton.styleFrom(
              // margin: const EdgeInsets.only(top: 40.0),
              // margin: const EdgeInsets.only(top: 40.0),
              // padding: EdgeInsets.fromLTRB(0, 50, 0, 0),
              foregroundColor: Colors.brown,
              backgroundColor: const Color(0xFFD2D79F)),
          onPressed: () {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => const TradePage()),
            );
          }, //To Do: Change to pop up the information
          child: Text('Enter',
              textAlign: TextAlign.center,
              style: GoogleFonts.lexendExa(
                color: const Color(0xFF483838),
                fontWeight: FontWeight.bold,
                fontSize: 16,
              )))
    ]);
  }
}
//To Do: Edit Information to be my Card
class TraderCard extends StatelessWidget {
  final String title;
  final String date;
  final String cert;

  const TraderCard({
    super.key,
    required this.title,
    required this.date,
    required this.cert,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        top: 15.0,
        left: 20.0,
        right: 20.0,
        bottom: 0.0,
      ),
      child: Card(
        color: const Color(0xFFD2D79F),
        elevation: 10, // Shadow depth
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Row(
            children: [
              const Icon(
                Icons.spa,
                color: Color(0xFF42855B),
                size: 35,
              ),
              const SizedBox(width: 15),
              InfoText(title: title, date: date, cert: cert),
              const Spacer(),
              IconButton(
                onPressed: () {}, // empty callback function
                icon: const Icon(
                  Icons.save_alt,
                  color: Color(0xFF483838),
                  size: 25,
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

//To Do: Change the Information
class InfoText extends StatelessWidget {
  const InfoText({
    super.key,
    required this.title,
    required this.date,
    required this.cert,
  });
  final String title;
  final String date;
  final String cert;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
        ),
        Text(date),
        Text(cert)
      ],
    );
  }
}
