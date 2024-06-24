import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:google_fonts/google_fonts.dart';

class TradeSuccess extends StatefulWidget {
  const TradeSuccess({super.key});

  @override
  State<TradeSuccess> createState() => _TradeSuccessState();
}

class _TradeSuccessState extends State<TradeSuccess> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
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
          ), //
          child: FractionallySizedBox(
            widthFactor: 1,
            heightFactor: 1,
            child: SingleChildScrollView(
                child: Column(
              children: [
                RearrangeBar(), BoxSuccess(), BackToHomeButt()
                // Tetton(style: TextButton.styleFrom(primary: Colors.brown), onPressed: onPressed,child: Text('Back to Homepage'))
              ],
            )),
          )),
      bottomNavigationBar: const BottomNavBar(
        pageName: "trade",
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

class BoxSuccess extends StatelessWidget {
  const BoxSuccess({
    super.key,
  });

  // get margin => null;
  @override
  Widget build(BuildContext context) {
    return Container(
        height: MediaQuery.of(context).size.height * 0.3,
        width: MediaQuery.of(context).size.width * 0.9,
        margin: const EdgeInsets.only(top: 40.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: const Color(0xFFD2D79F),
          ),
        ),
        child: Column(children: [
          Text(
            'Success!',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.25,
            child: Container(
              margin: EdgeInsets.all(20.0),
              child: const Image(
                image: AssetImage('assets/images/icon/leaf4.png'),
              ),
            ),
          )
        ]));
  }
}

class BackToHomeButt extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        // height: MediaQuery.of(context).size.height * 0.3,
        // width: MediaQuery.of(context).size.width * 0.9,
        margin: const EdgeInsets.only(top: 25.0),
        child: TextButton(
            style: TextButton.styleFrom(
                // margin: const EdgeInsets.only(top: 40.0),
                // margin: const EdgeInsets.only(top: 40.0),
                // padding: EdgeInsets.fromLTRB(0, 50, 0, 0),
                foregroundColor: Colors.brown,
                backgroundColor: const Color(0xFFD2D79F)),
            onPressed: () {
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const HomePage()),
              );
            },
            child: Text('Back to Homepage',
                textAlign: TextAlign.center,
                style: GoogleFonts.lexendExa(
                  color: const Color(0xFF483838),
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ))));
  }
}

//  const AssetImage('assets/images/icon/leaf4.png')
