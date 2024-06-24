import 'package:c_trade/pages/certificate.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CertificateInfo extends StatefulWidget {
  const CertificateInfo({
    super.key,
    //required this.certificate,
  });
  //final Certificate certificate;
  @override
  State<CertificateInfo> createState() => _CertificateInfoState();
}

class _CertificateInfoState extends State<CertificateInfo> {
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
          child: Column(
            children: [
              const RearrangeBar(),
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.7,
                width: MediaQuery.of(context).size.width * 0.8,
                child: Container(
                  margin: const EdgeInsets.only(top: 20),
                  decoration: const BoxDecoration(
                    color: Color(0xFFD2D79F),
                    borderRadius: BorderRadius.all(Radius.circular(5)),
                    boxShadow: [
                      BoxShadow(
                        color: Color(0xFF483838),
                        spreadRadius: 0.1,
                        blurRadius: 0.1,
                        offset: Offset(15, 15),
                      ),
                    ],
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      // const SizedBox(),
                      SizedBox(
                        height: MediaQuery.of(context).size.height * 0.2,
                        width: MediaQuery.of(context).size.width * 0.3,
                        child: const Image(
                            image: AssetImage('assets/images/icon/ctrade.png')),
                      ),
                      // Image.asset('assets/images/icon/ctrade.png'),
                      Container(
                        margin: const EdgeInsets.only(top: 0, bottom: 20),
                        child: Text(
                          'Certificate',
                          style: GoogleFonts.lexendExa(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      const SizedBox(),
                      Text(
                        'Surname lastname \n company name',
                        textAlign: TextAlign.center,
                        style: GoogleFonts.lexendExa(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(
                        'amount retail kgCO2eq',
                        style: GoogleFonts.lexendExa(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(),
                      Text(
                        'Cert. ID: 123456789 \n DD/MM/YY',
                        textAlign: TextAlign.center,
                        style: GoogleFonts.lexendExa(
                          fontSize: 15,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(),
                      const SizedBox(),
                      const SizedBox(),
                    ],
                  ),
                ),
              )
            ],
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
