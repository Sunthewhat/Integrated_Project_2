import 'package:c_trade/api/trade/book_trade.dart';
import 'package:c_trade/api/user/get_user_by_id.dart';
import 'package:c_trade/model/responses/get_user_response.dart';
import 'package:c_trade/model/responses/trader_response.dart';
import 'package:c_trade/pages/trade_success.dart';
import 'package:c_trade/widget/bottom_navbar.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class TradeConfirm extends StatefulWidget {
  final TraderResponse trader;
  final int expected;
  const TradeConfirm({
    super.key,
    required this.trader,
    required this.expected,
  });

  @override
  State<TradeConfirm> createState() => _TradeConfirmState();
}

class _TradeConfirmState extends State<TradeConfirm> {
  late final TraderResponse trader;
  GetUserResponse? user;
  bool isFetchingUser = true;
  bool isTermsAgreed = false;
  bool isTrading = false;

  void handleTermAgreed(bool? value) {
    if (value == null) return;
    setState(() {
      isTermsAgreed = value;
    });
  }

  void _fetchUser() async {
    var res = await GetUserById.getUserById();
    if (res.success) {
      setState(() {
        user = res.data;
        isFetchingUser = false;
      });
    } else {
      handleShowError(res.message);
    }
  }

  void handleShowError(String message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Error'),
          content: Text(message),
          actions: [
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

  void _handleSuccessTrade() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => const TradeSuccess(),
      ),
    );
  }

  void _handleConfirmTrade() async {
    if (!isTermsAgreed) {
      handleShowError('Please agree to the terms and conditions');
    } else {
      setState(() {
        isTrading = true;
      });
      var res = await BookTrade.bookTrade(trader.traderId);
      setState(() {
        isTrading = false;
      });
      if (res.success) {
        _handleSuccessTrade();
      } else {
        handleShowError(res.message);
      }
    }
  }

  @override
  void initState() {
    _fetchUser();
    trader = widget.trader;
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
        ), //
        child: FractionallySizedBox(
          widthFactor: 1,
          heightFactor: 1,
          child: Stack(
            children: [
              Padding(
                padding: EdgeInsets.only(
                  left: MediaQuery.of(context).size.width * 0.05,
                  right: MediaQuery.of(context).size.width * 0.05,
                ),
                child: SingleChildScrollView(
                    child: Column(
                  children: [
                    const RearrangeBar(),
                    const InformWow(),
                    isFetchingUser
                        ? Container(
                            height: MediaQuery.of(context).size.height * 0.5,
                            width: MediaQuery.of(context).size.width * 0.9,
                            margin: const EdgeInsets.only(top: 35.0),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              border: Border.all(
                                color: const Color(0xFFD2D79F),
                              ),
                            ),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const CircularProgressIndicator(
                                  color: Color(0xFFD2D79F),
                                ),
                                const SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  'Loading User Data',
                                  style: GoogleFonts.lexendExa(
                                      color: Colors.white),
                                ),
                              ],
                            ),
                          )
                        : BoxConfirm(
                            trader: trader,
                            user: user!,
                            expected: widget.expected,
                            isAgreed: isTermsAgreed,
                            onChanged: handleTermAgreed,
                          ),
                    CancelButt(
                      handleConfirm: _handleConfirmTrade,
                    ),
                  ],
                )),
              ),
              isTrading
                  ? Container(
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.5),
                      ),
                      width: MediaQuery.of(context).size.width,
                      height: MediaQuery.of(context).size.height,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const CircularProgressIndicator(
                            color: Color(0xFFD2D79F),
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Text(
                            "Trading Inprogress ...",
                            style: GoogleFonts.lexendExa(color: Colors.white),
                          ),
                        ],
                      ),
                    )
                  : const SizedBox(),
            ],
          ),
        ),
      ),
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
      margin: const EdgeInsets.only(top: 25, bottom: 10),
      child: const TopBar(title: "Trade"),
    );
  }
}

class InformWow extends StatelessWidget {
  const InformWow({super.key});

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
            'Confirm Your Order',
            style: GoogleFonts.lexendPeta(
              color: const Color(0xFFD2D79F),
              fontSize: 18,
              fontWeight: FontWeight.w400,
            ),
            textAlign: TextAlign.left,
          ),
        ),
        const Divider(
          color: Color(0xFFD2D79F),
          thickness: 1.2,
        ),
      ],
    );
  }
}

class BoxConfirm extends StatefulWidget {
  final TraderResponse trader;
  final GetUserResponse user;
  final int expected;
  final bool isAgreed;
  final void Function(bool?) onChanged;
  const BoxConfirm({
    super.key,
    required this.trader,
    required this.user,
    required this.expected,
    required this.isAgreed,
    required this.onChanged,
  });

  @override
  State<BoxConfirm> createState() => _BoxConfirmState();
}

class _BoxConfirmState extends State<BoxConfirm> {
  @override
  Widget build(BuildContext context) {
    double diff = (widget.trader.amount / widget.expected * 100 - 100);
    return Container(
      height: MediaQuery.of(context).size.height * 0.5,
      width: MediaQuery.of(context).size.width * 0.9,
      margin: const EdgeInsets.only(top: 35.0),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: const Color(0xFFD2D79F),
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const SizedBox(
            height: 20,
          ),
          Text(
            '${widget.user.firstname} ${widget.user.lastname}',
            style: GoogleFonts.lexendExa(fontSize: 20, color: Colors.white),
          ),
          Text(
            widget.user.company,
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          Text(
            '${widget.expected} kgCO2eq',
            style: GoogleFonts.lexendExa(
                fontSize: 20, color: Colors.white, fontWeight: FontWeight.w400),
          ),
          const SizedBox(),
          const Icon(
            Icons.repeat_outlined,
            color: Color(0xFF90B77D),
            size: 50,
          ),
          const SizedBox(),
          Text(
            widget.trader.companyName,
            style: GoogleFonts.lexendExa(
              fontSize: 20,
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
          Text(
            '${widget.trader.amount} kgCO2eq',
            style: GoogleFonts.lexendExa(
              fontSize: 20,
              color: Colors.white,
              fontWeight: FontWeight.w400,
            ),
          ),
          const SizedBox(),
          Text(
            'Total Difference : ${diff > 0 ? '+' : ''}${diff.toStringAsFixed(2)} %',
            style: GoogleFonts.lexendExa(
              fontSize: 15,
              color: diff >= 0 ? Colors.green : Colors.red,
              fontWeight: FontWeight.w400,
            ),
          ),
          const SizedBox(),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Checkbox(
                value: widget.isAgreed,
                onChanged: widget.onChanged,
                checkColor: const Color(0xFF483838),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(2),
                ),
                side: const BorderSide(color: Color(0xFFD2D79F), width: 2),
                fillColor: WidgetStateProperty.all(
                  widget.isAgreed
                      ? const Color(0xFFD2D79F)
                      : Colors.transparent,
                ),
              ),
              const TermandCondition(),
            ],
          ),
        ],
      ),
    );
  }
}

class TermandCondition extends StatelessWidget {
  const TermandCondition({super.key});
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          'I Do understand Terms and Conditions.',
          style: GoogleFonts.lexendPeta(
            color: const Color(0xFFD2D79F),
            fontSize: 10,
            fontWeight: FontWeight.w400,
          ),
        )
      ],
    );
  }
}

class CancelButt extends StatelessWidget {
  final void Function() handleConfirm;
  const CancelButt({super.key, required this.handleConfirm});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 25.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          InkWell(
            onTap: () {
              Navigator.pop(context);
            },
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(
                  color: const Color(0xFFD2D79F),
                ),
                borderRadius: BorderRadius.circular(5),
              ),
              width: MediaQuery.of(context).size.width * 0.28,
              height: MediaQuery.of(context).size.height * 0.05,
              child: Center(
                child: Text(
                  'Cancel',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.lexendExa(
                    color: const Color(0xFFD2D79F),
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                  ),
                ),
              ),
            ),
          ),
          InkWell(
            onTap: handleConfirm,
            child: Container(
              decoration: BoxDecoration(
                  color: const Color(0xFFD2D79F),
                  borderRadius: BorderRadius.circular(5),
                  boxShadow: const [
                    BoxShadow(
                      color: Color(0xFF483838),
                      offset: Offset(5, 5),
                    ),
                  ]),
              width: MediaQuery.of(context).size.width * 0.28,
              height: MediaQuery.of(context).size.height * 0.05,
              child: Center(
                child: Text(
                  'Trade',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.lexendExa(
                    color: const Color(0xFF483838),
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
