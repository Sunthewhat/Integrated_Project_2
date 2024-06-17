import 'package:flutter/material.dart';

class BottomNavBar extends StatefulWidget {
  final Function(int) onTap;
  final int currentIndex;
  final Color backgroundColor;
  const BottomNavBar({
    super.key,
    required this.onTap,
    required this.currentIndex,
    this.backgroundColor = const Color(0xFF90B77D),
  });

  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: widget.currentIndex,
      onTap: widget.onTap,
      backgroundColor: widget.backgroundColor,
      showSelectedLabels: false,
      showUnselectedLabels: false,
      items: const [
        BottomNavigationBarItem(
          icon: Icon(Icons.repeat, size: 41, color: Color(0xFF42855B)),
          label: 'repeat',
        ),
        BottomNavigationBarItem(
          icon: Icon(
            Icons.house,
            size: 41,
            color: Color(0xFF42855B),
          ),
          label: 'Settings',
        ),
        BottomNavigationBarItem(
          icon: Icon(
            Icons.picture_as_pdf,
            size: 41,
            color: Color(0xFF42855B),
          ),
          label: 'Settings',
        ),
      ],
    );
  }
}
