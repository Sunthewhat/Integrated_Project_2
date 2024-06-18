import 'package:flutter/material.dart';

class CustomCard extends StatelessWidget {
  final String title;
  final String date;
  final String cert;

  const CustomCard({
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
