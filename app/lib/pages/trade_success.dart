import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class TradeSuccess extends StatefulWidget {
  const TradeSuccess({super.key});

  @override
  State<TradeSuccess> createState() => _TradeSuccessState();
}

class _TradeSuccessState extends State<TradeSuccess> {
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
          child: const FractionallySizedBox(
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
      height: MediaQuery.of(context).size.height * 0.4,
      width: MediaQuery.of(context).size.width * 0.9,
      margin: const EdgeInsets.only(top: 40.0),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: const Color(0xFFD2D79F),
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text(
            'Success!',
            style: GoogleFonts.lexendExa(
                fontSize: 26, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.3,
            child: Container(
              margin: const EdgeInsets.all(20.0),
              child: const Image(
                image: AssetImage('assets/images/icon/leaf4.png'),
              ),
            ),
          ),
          const SizedBox(),
        ],
      ),
    );
  }
}

class BackToHomeButt extends StatelessWidget {
  const BackToHomeButt({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 25.0),
      child: InkWell(
        onTap: () {
          Navigator.pushAndRemoveUntil(
            context,
            MaterialPageRoute(
              builder: (context) => const HomePage(),
            ),
            (route) => false,
          );
        },
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
          decoration: BoxDecoration(
            color: const Color(0xFFD2D79F),
            borderRadius: BorderRadius.circular(5),
            boxShadow: const [
              BoxShadow(
                color: Color(0xFF483838),
                offset: Offset(5, 5),
              ),
            ],
          ),
          child: Text(
            'Back to Homepage',
            textAlign: TextAlign.center,
            style: GoogleFonts.lexendExa(
              color: const Color(0xFF483838),
              fontWeight: FontWeight.bold,
              fontSize: 16,
            ),
          ),
        ),
      ),
    );
  }
}

//  const AssetImage('assets/images/icon/leaf4.png')
