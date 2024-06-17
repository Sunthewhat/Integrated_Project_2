import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

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
      items: [
        BottomNavigationBarItem(
          icon: SvgPicture.asset('assets/images/icon/tradeIcon.svg',
              width: 41, height: 41, color: const Color(0xFF42855B)),
          label: 'repeat',
        ),
        const BottomNavigationBarItem(
          icon: Icon(
            Icons.house,
            size: 41,
            color: Color(0xFF42855B),
          ),
          label: 'Settings',
        ),
        BottomNavigationBarItem(
          icon: SvgPicture.asset('assets/images/icon/certificateIcon.svg',
              width: 41, height: 41, color: const Color(0xFF42855B)),
          label: 'certificate',
        ),
      ],
    );
  }
}
