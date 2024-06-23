import 'package:c_trade/pages/certificate.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
class BottomNavBar extends StatefulWidget {
  final String pageName;
  final Color backgroundColor;
  const BottomNavBar({
    super.key,
    required this.pageName,
    this.backgroundColor = const Color(0xFF90B77D),
  });

  @override
  State<BottomNavBar> createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  late int _currentIndex;
  @override
  void initState() {
    _currentIndex = widget.pageName == 'trade'
        ? 0
        : widget.pageName == 'home'
            ? 1
            : 2;
    super.initState();
  }

  void handleTradePage() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => const Certificate(),
      ),
    );
  }

  void handleHomePage() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => const Certificate(),
      ),
    );
  }

  void handleCertificatePage() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => const Certificate(),
      ),
    );
  }

  void handleOnTap(int index) {
    if (index == _currentIndex) return;
    switch (index) {
      case 0:
        handleTradePage();
        break;
      case 1:
        handleHomePage();
        break;
      case 2:
        handleCertificatePage();
        break;
      default:
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: _currentIndex,
      onTap: handleOnTap,
      backgroundColor: widget.backgroundColor,
      showSelectedLabels: false,
      showUnselectedLabels: false,
      items: [
        BottomNavigationBarItem(
          icon: SvgPicture.asset('assets/images/icon/tradeIcon.svg',
              width: 30, height: 30, color: const Color(0xFF42855B)),
          label: 'trade',
        ),
        const BottomNavigationBarItem(
          icon: Icon(
            Icons.house,
            size: 30,
            color: Color(0xFF42855B),
          ),
          label: 'home',
        ),
        BottomNavigationBarItem(
          icon: SvgPicture.asset('assets/images/icon/certificateIcon.svg',
              width: 25, height: 30, color: const Color(0xFF42855B)),
          label: 'certificate',
        ),
      ],
    );
  }
}
