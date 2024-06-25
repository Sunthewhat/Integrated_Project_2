import 'package:c_trade/model/responses/certificate_response.dart';
import 'package:c_trade/pages/certificate_info.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomCard extends StatelessWidget {
  final CertificateResponse cert;

  const CustomCard({
    super.key,
    required this.cert,
  });
  void openCertificteInfo(BuildContext context, CertificateResponse cert) {}

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        top: 15.0,
        left: 20.0,
        right: 20.0,
        bottom: 0.0,
      ),
      child: Container(
        decoration: const BoxDecoration(
          color: Color(0xFFD2D79F),
          borderRadius: BorderRadius.all(Radius.circular(20)),
          boxShadow: [
            BoxShadow(
              color: Color(0xFF483838),
              spreadRadius: 0.1,
              offset: Offset(5, 7),
            ),
          ],
        ),
        child: Card(
          color: const Color(0xFFD2D79F),
          // shape: RoundedRectangleBorder(
          //   borderRadius: BorderRadius.circular(20.0),
          // ),
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
                InfoText(
                    title: "${cert.amount} kgCO2eq",
                    date: cert.date,
                    cert: cert.certificateId),
                const Spacer(),
                IconButton(
                  onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => CertificateInfo(cert: cert),
                    ),
                  ),
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
      ),
    );
  }
}

class InfoText extends StatelessWidget {
  const InfoText({
    super.key,
    required this.title,
    required this.date,
    required this.cert,
  });

  final String title;
  final DateTime date;
  final String cert;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: GoogleFonts.lexendExa(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          date.toString().substring(0, 10),
          style: GoogleFonts.lexendExa(
            fontSize: 15,
            fontWeight: FontWeight.w300,
          ),
        ),
        Text(
          "${cert.toString().substring(0, 5)}-...-${cert.toString().substring(27, 32)}",
          style: GoogleFonts.lexendExa(
            fontSize: 15,
            fontWeight: FontWeight.w300,
          ),
        )
      ],
    );
  }
}
