import 'package:c_trade/api/certificate/certificate.dart';
import 'package:c_trade/api/user/get_trade_info.dart';
import 'package:c_trade/model/responses/certificate_response.dart';
import 'package:c_trade/model/responses/trade_info_response.dart';
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
        child: FractionallySizedBox(
          widthFactor: 1,
          heightFactor: 1,
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
                        SizedBox(
                          height: MediaQuery.of(context).size.height * 0.9,
                          child: ListView.builder(
                            itemCount: certificates.length,
                            itemBuilder: (BuildContext context, int index) {
                              var certificate = certificates[index];
                              return CustomCard(
                                title: "${certificate.amount} kgCO2eq",
                                date: certificate.date
                                    .toString()
                                    .substring(0, 10),
                                cert: "Cert. ID: ${certificate.certificateId}",
                              );
                            },
                          ),
                        ),
                      ],
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
        "Total  ${widget.tradeInfo!.totalCertificates} Certificates with ${widget.tradeInfo!.totalCarbonOffset} kgCO2eq ",
        style: const TextStyle(
          color: Colors.white,
          fontSize: 14,
        ),
      ),
    );
  }
}
