import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/card.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';

class Certificate extends StatefulWidget {
  const Certificate({super.key});

  @override
  State<Certificate> createState() => _CertificateState();
}

class _CertificateState extends State<Certificate> {
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
        ),
        child: const SingleChildScrollView(
          padding: EdgeInsets.only(bottom: 20.0),
          child: Column(children: [
            RearrangeBar(),
            TotalAmount(),
            CustomCard(
              title: "<amount> kgCO2eq",
              date: "MM/DD/YYYY",
              cert: "Cert. ID: <cert id>",
            ),
            CustomCard(
              title: "<amount> kgCO2eq",
              date: "MM/DD/YYYY",
              cert: "Cert. ID: <cert id>",
            ),
            CustomCard(
              title: "<amount> kgCO2eq",
              date: "MM/DD/YYYY",
              cert: "Cert. ID: <cert id>",
            ),
            CustomCard(
              title: "<amount> kgCO2eq",
              date: "MM/DD/YYYY",
              cert: "Cert. ID: <cert id>",
            ),
            CustomCard(
              title: "<amount> kgCO2eq",
              date: "MM/DD/YYYY",
              cert: "Cert. ID: <cert id>",
            ),
            CustomCard(
              title: "<amount> kgCO2eq",
              date: "MM/DD/YYYY",
              cert: "Cert. ID: <cert id>",
            ),
          ]),
        ),
      ),
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
      child: const TopBar(title: "Certificate"),
    );
  }
}

class TotalAmount extends StatelessWidget {
  const TotalAmount({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 0),
      child: const Text(
        "Total  <amount> Certificates with <amount> kgCO2eq ",
        style: TextStyle(
          color: Colors.white,
          fontSize: 14,
          fontFamily: 'Lexend',
        ),
      ),
    );
  }
}
