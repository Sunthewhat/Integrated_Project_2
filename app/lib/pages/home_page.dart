import 'dart:ui';
import 'package:c_trade/api/trade/stats.dart';
import 'package:c_trade/api/user/get_trade_info.dart';
import 'package:c_trade/api/user/get_user_by_id.dart';
import 'package:c_trade/model/responses/trade_info_response.dart';
import 'package:c_trade/model/responses/trade_stats_response.dart';
import 'package:c_trade/pages/signin_page.dart';
import 'package:c_trade/pages/user_information_page.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:flutter/material.dart';
import 'package:c_trade/local_storage.dart';
import 'package:google_fonts/google_fonts.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool isLoading = true;
  bool isInfoLoading = true;
  bool isStatsLoading = true;
  String name = '';
  String surname = '';
  String email = '';
  String profileImagePath = '';
  TradeStatsResponse? stats;
  TradeInfoResponse? tradeInfo;
  AssetImage progressImage = const AssetImage('assets/images/icon/leaf4.png');
  List<AssetImage> progressImages = [
    const AssetImage('assets/images/icon/leaf0.png'),
    const AssetImage('assets/images/icon/leaf1.png'),
    const AssetImage('assets/images/icon/leaf2.png'),
    const AssetImage('assets/images/icon/leaf3.png'),
    const AssetImage('assets/images/icon/leaf4.png'),
  ];
  int currentMonthIndex = DateTime.now().month - 1;
  List<String> months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  void _getUserDetails() async {
    var response = await GetUserById.getUserById();
    if (response.success) {
      setState(() {
        isLoading = false;
        name = response.data!.firstname;
        surname = response.data!.lastname;
        email = response.data!.email;
        profileImagePath = response.data!.profileImage;
      });
    }
  }

  void _getTradeInfo() async {
    var response = await GetTradeInfo.getTradeInfo();
    if (response.success) {
      setState(() {
        isInfoLoading = false;
        tradeInfo = response.data!;
      });
    }
    setProgressImage();
  }

  void _getStats() async {
    var response = await GetTradeStats.getTradeStats();
    if (response.success) {
      setState(() {
        isStatsLoading = false;
        stats = response.data!;
      });
    }
    setProgressImage();
  }

  @override
  void initState() {
    super.initState();
    _getUserDetails();
    _getTradeInfo();
    _getStats();
  }

  void handleProfilePage() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => const InformationPage(
          isRegister: false,
        ),
      ),
    );
  }

  void handleLogout() {
    LocalStorage.clear();
    Navigator.of(context).pushAndRemoveUntil(
      MaterialPageRoute(
        builder: (context) => const SignInPage(),
      ),
      (route) => false,
    );
  }

  double getPercentage() {
    if (stats == null || tradeInfo == null) return 0;
    return stats!.getValueForMonth(currentMonthIndex) /
        tradeInfo!.getExpected();
  }

  void setProgressImage() {
    if (stats == null || tradeInfo == null) return;
    double percentage = getPercentage();
    setState(() {
      if (percentage > 0.75) {
        progressImage = progressImages[4];
      } else if (percentage > 0.5) {
        progressImage = progressImages[3];
      } else if (percentage > 0.25) {
        progressImage = progressImages[2];
      } else if (percentage > 0) {
        progressImage = progressImages[1];
      } else {
        progressImage = progressImages[0];
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      endDrawer: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
        child: SizedBox(
          width: MediaQuery.of(context).size.width * 0.8,
          child: Drawer(
            backgroundColor: const Color(0x20FFFFFF),
            child: ListView(
              padding: EdgeInsets.zero,
              children: [
                UserAccountsDrawerHeader(
                  accountName: Text('$name $surname',
                      style: GoogleFonts.lemonada(
                          fontSize: 20, fontWeight: FontWeight.bold)),
                  accountEmail: Text(email,
                      style: GoogleFonts.lexendExa(
                          fontSize: 16, color: const Color(0xFFD2D79F))),
                  decoration: const BoxDecoration(
                    color: Colors.transparent,
                  ),
                ),
                SizedBox(
                  height: MediaQuery.of(context).size.height * 0.05,
                ),
                ListTile(
                  leading: const Icon(Icons.person, color: Colors.white),
                  title: Text(
                    'Profile',
                    style: GoogleFonts.roboto(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  onTap: handleProfilePage,
                ),
                const Divider(
                  color: Colors.white,
                ),
                ListTile(
                  leading: const Icon(Icons.logout, color: Colors.white),
                  title: Text(
                    'Logout',
                    style: GoogleFonts.roboto(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  onTap: handleLogout,
                ),
              ],
            ),
          ),
        ),
      ),
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
          child: !isLoading
              ? SingleChildScrollView(
                  child: Padding(
                    padding: EdgeInsets.only(
                        top: MediaQuery.of(context).size.height * 0.05),
                    child: Padding(
                      padding: EdgeInsets.all(
                          MediaQuery.of(context).size.width * 0.05),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Hi ! $surname',
                                    style: GoogleFonts.lemonada(
                                      fontSize: 20,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                    ),
                                  ),
                                  Text(
                                    'nice to see you again',
                                    style: GoogleFonts.lexendExa(
                                      fontSize: 16,
                                      color: const Color(0xFFD2D79F),
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(),
                              CircleAvatar(
                                foregroundImage: NetworkImage(profileImagePath),
                              ),
                              Builder(
                                builder: (context) {
                                  return InkWell(
                                    onTap: () {
                                      Scaffold.of(context).openEndDrawer();
                                    },
                                    child: const Icon(
                                      Icons.menu,
                                      color: Colors.white,
                                    ),
                                  );
                                },
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 10,
                          ),
                          const Divider(
                            color: Colors.white,
                            thickness: 1,
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            height: MediaQuery.of(context).size.height * 0.08,
                            width: MediaQuery.of(context).size.width * 0.9,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(5),
                              border: Border.all(
                                color: const Color(0xFFD2D79F),
                              ),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: !isInfoLoading
                                  ? Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.start,
                                      children: [
                                        Row(
                                          children: [
                                            Text(
                                              "Total Carbon Offset: ${tradeInfo?.totalCarbonOffset ?? 0} kgCO2eq",
                                              style: GoogleFonts.lexendDeca(
                                                  fontSize: 16,
                                                  color: Colors.white,
                                                  fontWeight: FontWeight.bold),
                                            ),
                                            const SizedBox()
                                          ],
                                        ),
                                        Row(
                                          children: [
                                            Text(
                                              "Total Certificates: ${tradeInfo?.totalCertificates ?? 0}",
                                              style: GoogleFonts.lexendDeca(
                                                fontSize: 16,
                                                color: Colors.white,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            const SizedBox()
                                          ],
                                        ),
                                      ],
                                    )
                                  : const Center(
                                      child: CircularProgressIndicator(
                                        valueColor:
                                            AlwaysStoppedAnimation<Color>(
                                                Colors.white),
                                      ),
                                    ),
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const SizedBox(),
                              InkWell(
                                onTap: () {
                                  setState(() {
                                    currentMonthIndex > 0
                                        ? currentMonthIndex--
                                        : 0;
                                  });
                                  if (currentMonthIndex != 0) {
                                    setProgressImage();
                                  }
                                },
                                child: Icon(
                                  Icons.arrow_back_ios_new_rounded,
                                  color: currentMonthIndex != 0
                                      ? const Color(0xFFD2D79F)
                                      : const Color(0xFFD2D79F)
                                          .withOpacity(0.5),
                                ),
                              ),
                              const SizedBox(
                                width: 10,
                              ),
                              SizedBox(
                                width: MediaQuery.of(context).size.width * 0.5,
                                child: Center(
                                  child: Text(
                                    months[currentMonthIndex],
                                    style: GoogleFonts.lexendExa(
                                        fontSize: 24,
                                        color: const Color(0xFFD2D79F),
                                        fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ),
                              const SizedBox(
                                width: 10,
                              ),
                              InkWell(
                                onTap: () {
                                  setState(() {
                                    currentMonthIndex < 11
                                        ? currentMonthIndex++
                                        : 11;
                                  });
                                  if (currentMonthIndex != 11) {
                                    setProgressImage();
                                  }
                                },
                                child: Icon(
                                  Icons.arrow_forward_ios_rounded,
                                  color: currentMonthIndex != 11
                                      ? const Color(0xFFD2D79F)
                                      : const Color(0xFFD2D79F)
                                          .withOpacity(0.5),
                                ),
                              ),
                              const SizedBox(),
                            ],
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          SizedBox(
                            width: MediaQuery.of(context).size.width * 0.7,
                            height: MediaQuery.of(context).size.height * 0.2,
                            child: Image(
                              image: progressImage,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Text(
                            '${stats?.getValueForMonth(currentMonthIndex)}/${tradeInfo?.expectedMonthlyCarbonOffset}',
                            style: GoogleFonts.lexendExa(
                              fontSize: 16,
                              color: const Color(0xFFD2D79F),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          Text(
                            'You reached ${getPercentage().toStringAsFixed(1)}% of your goal',
                            style: GoogleFonts.lexendExa(
                              fontSize: 16,
                              color: const Color(0xFFD2D79F),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(
                            height: 40,
                          ),
                          Text(
                            'News',
                            style: GoogleFonts.lemonada(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Text(
                            'Global Offset\n23.394 M. kgCO2eq',
                            style: GoogleFonts.lexendExa(
                              fontSize: 20,
                              color: Colors.white,
                              fontWeight: FontWeight.w500,
                            ),
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          SizedBox(
                            width: MediaQuery.of(context).size.width * 0.7,
                            height: MediaQuery.of(context).size.height * 0.2,
                            child: const Image(
                              image: AssetImage('assets/images/icon/news.png'),
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Text(
                            'Expected Equivalant\nof Planting in Thailand\n837,394 kgCO2eq',
                            style: GoogleFonts.lexendExa(
                              fontSize: 20,
                              color: Colors.white,
                              fontWeight: FontWeight.w500,
                            ),
                            textAlign: TextAlign.center,
                          ),
                          SizedBox(
                            height: MediaQuery.of(context).size.height * 0.2,
                            child: const Image(
                              image:
                                  AssetImage('assets/images/icon/expected.png'),
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Text(
                            '2024 C-Trade co. All rights reserved',
                            style: GoogleFonts.lexend(
                                fontSize: 16,
                                color: Colors.white,
                                fontWeight: FontWeight.w200),
                          ),
                        ],
                      ),
                    ),
                  ),
                )
              : Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const CircularProgressIndicator(
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                      ),
                      SizedBox(
                        height: MediaQuery.of(context).size.height * 0.05,
                      ),
                      Text(
                        'Loading User information...',
                        style: GoogleFonts.lexendDeca(
                          fontSize: 16,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                ),
        ),
      ),
      bottomNavigationBar: const BottomNavBar(
        pageName: 'home',
      ),
    );
  }
}
