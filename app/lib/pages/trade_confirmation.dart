import 'package:c_trade/pages/home_page.dart';
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
              children: [RearrangeBar(), InformWow(), BoxConfirm()],
            )),
          )),
      bottomNavigationBar: BottomNavBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
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


// class DownButton extends StatefulWidget {
//   const DownButton({super.key});

//   @override

