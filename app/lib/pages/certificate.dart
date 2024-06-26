import 'package:c_trade/api/certificate/certificate.dart';
import 'package:c_trade/api/user/get_trade_info.dart';
import 'package:c_trade/model/responses/certificate_response.dart';
import 'package:c_trade/model/responses/trade_info_response.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/card.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Certificate extends StatefulWidget {
  const Certificate({super.key});

  @override
  State<Certificate> createState() => _CertificateState();
}

class _CertificateState extends State<Certificate> {
  bool isFetching = true;
  bool isFetchingStats = true;
  List<CertificateResponse> certificates = [];
  TradeInfoResponse? tradeInfo;

  void getCertificates() async {
    var response = await CertificateAPI.certificate();
    setState(() {
      certificates = response.data!.certificates;
      isFetching = false;
    });
  }

  void getStats() async {
    var response = await GetTradeInfo.getTradeInfo();
    if (response.success) {
      setState(() {
        tradeInfo = response.data;
        isFetchingStats = false;
      });
    }
  }

  @override
  void initState() {
    getCertificates();
    getStats();
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
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          child: Padding(
            padding: EdgeInsets.only(
              left: MediaQuery.of(context).size.width * 0.05,
              right: MediaQuery.of(context).size.width * 0.05,
            ),
            child: SingleChildScrollView(
              child: Column(children: [
                const RearrangeBar(),
                Column(
                  children: isFetching || isFetchingStats
                      ? const [
                          CircularProgressIndicator(),
                          Text("Fetching data..."),
                        ]
                      : [
                          TotalAmount(
                            tradeInfo: tradeInfo,
                          ),
                          for (var c in certificates) CustomCard(cert: c),
                        ],
                ),
              ]),
            ),
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

class TotalAmount extends StatefulWidget {
  final TradeInfoResponse? tradeInfo;
  const TotalAmount({
    super.key,
    this.tradeInfo,
  });

  @override
  State<TotalAmount> createState() => _TotalAmountState();
}

class _TotalAmountState extends State<TotalAmount> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      child: Text(
        "Total : ${widget.tradeInfo!.totalCertificates} Certificates with ${widget.tradeInfo!.totalCarbonOffset} kgCO2eq ",
        style: GoogleFonts.lexendExa(
          fontSize: 14,
          color: Colors.white,
          fontWeight: FontWeight.w200,
        ),
      ),
    );
  }
}
