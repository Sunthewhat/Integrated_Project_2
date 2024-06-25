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
    } else {
      handleShowError(res.message);
    }
  }

  void handleShowError(String msg) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Error'),
          content: Text(msg),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
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
                    if (traders != null)
                      for (var trader in traders!.traders)
                        TraderCard(trader: trader),
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

class TraderCard extends StatelessWidget {
  final TraderResponse trader;

  const TraderCard({
    super.key,
    required this.trader,
  });

  void handleTrade(int id) {
    print('Trade with $id');
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 10, bottom: 10),
      width: MediaQuery.of(context).size.width * 0.9,
      padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(
        border: Border.all(
          color: const Color(0xFFD2D79F),
        ),
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            trader.companyName,
            style: GoogleFonts.lexendExa(
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.w500,
            ),
          ),
          Text(
            '${trader.amount} kgCO2eq',
            style: GoogleFonts.lexendExa(
              color: Colors.white,
              fontSize: 14,
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                '${trader.percentage > 0 ? '+' : ''}${trader.percentage}%',
                style: GoogleFonts.lexendExa(
                    color: trader.percentage > 0 ? Colors.green : Colors.red,
                    fontSize: 14,
                    fontWeight: FontWeight.bold),
              ),
              InkWell(
                onTap: () {
                  handleTrade(trader.traderId);
                },
                child: Container(
                  padding: const EdgeInsets.only(
                    left: 10,
                    right: 10,
                    top: 5,
                    bottom: 5,
                  ),
                  decoration: const BoxDecoration(
                    color: Color(0xFFD2D79F),
                    borderRadius: BorderRadius.all(Radius.circular(5)),
                    boxShadow: [
                      BoxShadow(
                        color: Color(0xFF483838),
                        blurRadius: 0,
                        spreadRadius: 0,
                        offset: Offset(3.0, 3.0),
                      )
                    ],
                  ),
                  child: Text(
                    'Trade',
                    style: GoogleFonts.lexendExa(
                      color: const Color(0xFF483838),
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              )
            ],
          )
        ],
      ),
    );
  }
}
