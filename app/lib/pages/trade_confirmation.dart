import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/pages/trade_page.dart';
import 'package:c_trade/pages/trade_success.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:google_fonts/google_fonts.dart';

class TradeConfirm extends StatefulWidget {
  const TradeConfirm({super.key});

  @override
  State<TradeConfirm> createState() => _TradeConfirmState();
}

class _TradeConfirmState extends State<TradeConfirm> {
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
          child: const FractionallySizedBox(
            widthFactor: 1,
            heightFactor: 1,
            child: SingleChildScrollView(
                child: Column(
              children: [
                RearrangeBar(),
                InformWow(),
                BoxConfirm(),
                CheckboxExample(),
                CancleButt(),
                TradeButt(),
              ],
            )),
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

class InformWow extends StatelessWidget {
  const InformWow({super.key});

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
            'Confirm Your Order',
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

class BoxConfirm extends StatelessWidget {
  const BoxConfirm({
    super.key,
  });
  @override
  Widget build(BuildContext context) {
    return Container(
        height: MediaQuery.of(context).size.height * 0.5,
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
            '<surname> <lastname>',
            style: GoogleFonts.lexendExa(fontSize: 20, color: Colors.white),
          ),
          Text(
            '<Company Name>',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          Text(
            '<amount of cc> kgCO2eq',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          Icon(
            Icons.repeat_outlined,
            color: Colors.red,
            size: 43,
          ),
          Text(
            '<Tarder Company Name>',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          Text(
            '<Amount of CC> kgCO2eq',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          Text(
            '<Total Diff> %',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          // Checkbox(value: value, onChanged: onChanged)
        ]));
  }
}

//Todo: add term and Conditions here
//layout term and condition
//make a card finish
//make enter
class TermandCondition extends StatelessWidget {
  const TermandCondition({super.key});
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          'By clicking here, I state that I have read and understood the terms and conditions.',
          style: GoogleFonts.lexendPeta(
            color: const Color(0xFFD2D79F),
            fontSize: 16,
            fontWeight: FontWeight.w400,
          ),
        )
      ],
    );
  }
}

class CheckboxExampleApp extends StatelessWidget {
  const CheckboxExampleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Checkbox Sample')),
        body: const Center(
          child: CheckboxExample(),
        ),
      ),
    );
  }
}

class CheckboxExample extends StatefulWidget {
  const CheckboxExample({super.key});
  @override
  State<CheckboxExample> createState() => _CheckboxExampleState();
}

class _CheckboxExampleState extends State<CheckboxExample> {
  bool isChecked = false;

  @override
  Widget build(BuildContext context) {
    Color getColor(Set<MaterialState> states) {
      const Set<MaterialState> interactiveStates = <MaterialState>{
        MaterialState.pressed,
        MaterialState.hovered,
        MaterialState.focused,
      };
      if (states.any(interactiveStates.contains)) {
        return const Color(0xFFD2D79F);
      }
      return Colors.green;
    }

    return Checkbox(
      checkColor: Colors.brown,
      fillColor: MaterialStateProperty.resolveWith(getColor),
      value: isChecked,
      onChanged: (bool? value) {
        setState(() {
          isChecked = value!;
        });
      },
    );
  }
}

class CancleButt extends StatelessWidget {
  const CancleButt({super.key});
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
                MaterialPageRoute(builder: (context) => const TradePage()),
              );
            },
            child: Text('Cancle',
                textAlign: TextAlign.center,
                style: GoogleFonts.lexendExa(
                  color: const Color(0xFF483838),
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ))));
  }
}

class TradeButt extends StatelessWidget {
  const TradeButt({super.key});
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
                MaterialPageRoute(builder: (context) => const TradeSuccess()),
              );
            },
            child: Text('Trade',
                textAlign: TextAlign.center,
                style: GoogleFonts.lexendExa(
                  color: const Color(0xFF483838),
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ))));
  }
}
