import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/card.dart';
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
        child: Column(children: [
          const SizedBox(height: 50),
          const Text(
            'Certificate',
            style: TextStyle(
              color: Colors.white,
              fontSize: 30,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 20),
          Expanded(
            child: ListView(
              children: const [
                CustomCard(
                  title: "<amount> kgCO2eq",
                  date: "MM/DD/YYYY",
                  cert: "Cert. ID: <cert id>)",
                )
              ],
            ),
          ),
        ]),
      ),
      bottomNavigationBar: BottomNavBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }
}
