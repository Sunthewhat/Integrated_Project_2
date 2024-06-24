import 'package:c_trade/api/trade/get_available.dart';
import 'package:c_trade/model/responses/trader_response.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class TradePage extends StatefulWidget {
  const TradePage({super.key});

  @override
  State<TradePage> createState() => _TradePageState();
}

class _TradePageState extends State<TradePage> {
  TradersResponse? traders;
  void handleFetchTrader(int amount) async {
    var res = await GetAvailableTrade.getAvailable(amount);
    if (res.success) {
      setState(() {
        traders = res.data;
      });
    } else {}
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
            child: Padding(
              padding: EdgeInsets.only(
                left: MediaQuery.of(context).size.width * 0.05,
                right: MediaQuery.of(context).size.width * 0.05,
              ),
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    const RearrangeBar(),
                    const FillAmount(),
                    TradeBoxInform(handleSearch: handleFetchTrader),
                    const ChooseTrader(),
                  ],
                ),
              ),
            ),
          )),
      bottomNavigationBar: const BottomNavBar(
        pageName: 'trade',
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
      child: const TopBar(title: "Trade"),
    );
  }
}

class FillAmount extends StatelessWidget {
  const FillAmount({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: MediaQuery.of(context).size.height * 0.03,
        ),
        FractionallySizedBox(
          widthFactor: 1,
          child: Text(
            'Fill Your Retail Amount',
            style: GoogleFonts.lexendPeta(
              color: const Color(0xFFD2D79F),
              fontSize: 16,
              fontWeight: FontWeight.w400,
            ),
            textAlign: TextAlign.left,
          ),
        ),
        const Divider(
          color: Color(0xFFD2D79F),
          thickness: 1,
        ),
      ],
    );
  }
}

class ChooseTrader extends StatelessWidget {
  const ChooseTrader({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: MediaQuery.of(context).size.height * 0.03,
        ),
        FractionallySizedBox(
          widthFactor: 1,
          child: Text(
            'Choose Your Trader',
            style: GoogleFonts.lexendPeta(
              color: const Color(0xFFD2D79F),
              fontSize: 16,
              fontWeight: FontWeight.w400,
            ),
            textAlign: TextAlign.left,
          ),
        ),
        const Divider(
          color: Color(0xFFD2D79F),
          thickness: 1,
        ),
      ],
    );
  }
}

class TradeBoxInform extends StatefulWidget {
  final void Function(int) handleSearch;
  const TradeBoxInform({super.key, required this.handleSearch});

  @override
  State<TradeBoxInform> createState() => _TradeBoxInformState();
}

class _TradeBoxInformState extends State<TradeBoxInform> {
  TextEditingController amountController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Container(
        width: MediaQuery.of(context).size.width * 0.9,
        height: MediaQuery.of(context).size.height * 0.18,
        decoration: BoxDecoration(
          color: const Color(0xFFD2D79F),
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: const Color(0xFFD2D79F),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.only(
            top: 20,
            left: 25,
            right: 25,
            bottom: 20,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              SizedBox(
                width: MediaQuery.of(context).size.width * 0.8,
                child: TextField(
                  controller: amountController,
                  style: GoogleFonts.roboto(
                    color: const Color(0x9F483838),
                  ),
                  decoration: InputDecoration(
                      labelStyle: GoogleFonts.roboto(
                        color: const Color(0xFF483838),
                      ),
                      filled: true,
                      fillColor: Colors.transparent,
                      disabledBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFF483838), width: 1),
                      ),
                      enabledBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFF483838), width: 1),
                      ),
                      border: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFF483838), width: 1),
                      ),
                      focusedBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFF483838), width: 1),
                      ),
                      labelText: 'Amount of Retail CC',
                      hintText: 'Amount of Retail CC',
                      hintStyle: GoogleFonts.lexendDeca(),
                      suffix: Text(
                        "kgCO2eq",
                        style: GoogleFonts.lexendDeca(),
                      )),
                ),
              ),
              InkWell(
                onTap: () {
                  var amount = amountController.text;
                  if (amount.isEmpty) return;
                  widget.handleSearch(int.parse(amount));
                },
                child: Container(
                  height: MediaQuery.of(context).size.height * 0.05,
                  width: MediaQuery.of(context).size.width * 0.3,
                  decoration: BoxDecoration(
                      color: const Color(0xFF483838),
                      borderRadius: BorderRadius.circular(8)),
                  child: Center(
                    child: Text(
                      "Enter",
                      style: GoogleFonts.lexendExa(
                        color: const Color(0xFFD2D79F),
                        fontWeight: FontWeight.bold,
                        fontSize: 20,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      )
    ]);
  }
}

class InformationToTrade extends StatelessWidget {
  List<String> preferTrade = ['+-100', '+-200', '+-500', '+-1,000'];

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Container(
        width: MediaQuery.of(context).size.height * 0.48,
        height: MediaQuery.of(context).size.height * 0.4,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: const Color(0xFFD2D79F),
          ),
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(
            color: Color(0xFFD2D79F),
          ),
        ),
      ),
      TextButton(
          style: TextButton.styleFrom(
              // margin: const EdgeInsets.only(top: 40.0),
              // margin: const EdgeInsets.only(top: 40.0),
              // padding: EdgeInsets.fromLTRB(0, 50, 0, 0),
              foregroundColor: Colors.brown,
              backgroundColor: const Color(0xFFD2D79F)),
          onPressed: () {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => const TradePage()),
            );
          }, //To Do: Change to pop up the information
          child: Text('Enter',
              textAlign: TextAlign.center,
              style: GoogleFonts.lexendExa(
                color: const Color(0xFF483838),
                fontWeight: FontWeight.bold,
                fontSize: 16,
              )))
    ]);
  }
}

//To Do: Edit Information to be my Card
class TraderCard extends StatelessWidget {
  final String title;
  final String date;
  final String cert;

  const TraderCard({
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

//To Do: Change the Information
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
