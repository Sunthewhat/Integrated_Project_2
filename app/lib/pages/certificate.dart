import 'package:c_trade/api/certificate/certificate.dart';
import 'package:c_trade/model/responses/certificate_response.dart';
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
  List<CertificateResponse> certificates = [];

  void getCertificates() async {
    var response = await CertificateAPI.certificate();
    setState(() {
      certificates = response.data!.certificates;
    });
  }

  @override
  void initState() {
    getCertificates();
    super.initState();
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
        child: FractionallySizedBox(
          widthFactor: 1,
          heightFactor: 1,
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(20.0),
            child: Column(children: [
              const RearrangeBar(),
              const TotalAmount(),
              CustomCard(
                title: "${certificates[0].amount}<amount> kgCO2eq",
                date: "MM/DD/YYYY",
                cert: "Cert. ID: <cert id>",
              ),
            ]),
          ),
        ),
      ),
      bottomNavigationBar: const BottomNavBar(
        pageName: "certificate",
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
      margin: const EdgeInsets.only(bottom: 10),
      child: const Text(
        "Total  <amount> Certificates with <amount> kgCO2eq ",
        style: TextStyle(
          color: Colors.white,
          fontSize: 14,
        ),
      ),
    );
  }
}
