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
    return Card(
      elevation: 4, // Shadow depth
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10), // Rounded corners
      ),
      child: ListTile(
        title: Text(title),
        subtitle: Text(date),
        leading: Icon(Icons.star), // Icon on the left side
        trailing: Icon(Icons.arrow_forward), // Icon on the right side
      ),
    );
  }
}
