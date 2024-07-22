"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8372], {
        18372: function(e, t, a) {
            a.d(t, {
                offchainLookup: function() {
                    return w
                },
                offchainLookupSignature: function() {
                    return m
                }
            });
            var r = a(85403),
                s = a(94518),
                n = a(82022),
                o = a(97609);
            class c extends n.G {
                constructor({
                    callbackSelector: e,
                    cause: t,
                    data: a,
                    extraData: r,
                    sender: s,
                    urls: n
                }) {
                    super(t.shortMessage || "An error occurred while fetching for an offchain result.", {
                        cause: t,
                        metaMessages: [...t.metaMessages || [], t.metaMessages ? .length ? "" : [], "Offchain Gateway Call:", n && ["  Gateway URL(s):", ...n.map(e => `    ${(0,o.Gr)(e)}`)], `  Sender: ${s}`, `  Data: ${a}`, `  Callback selector: ${e}`, `  Extra data: ${r}`].flat()
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "OffchainLookupError"
                    })
                }
            }
            class i extends n.G {
                constructor({
                    result: e,
                    url: t
                }) {
                    super("Offchain gateway response is malformed. Response data must be a hex value.", {
                        metaMessages: [`Gateway URL: ${(0,o.Gr)(t)}`, `Response: ${(0,s.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "OffchainLookupResponseMalformedError"
                    })
                }
            }
            class u extends n.G {
                constructor({
                    sender: e,
                    to: t
                }) {
                    super("Reverted sender address does not match target contract address (`to`).", {
                        metaMessages: [`Contract address: ${t}`, `OffchainLookup sender address: ${e}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "OffchainLookupSenderMismatchError"
                    })
                }
            }
            var l = a(11997),
                f = a(30688),
                d = a(74743),
                p = a(40618),
                h = a(99786),
                y = a(37016);
            let m = "0x556f1830",
                b = {
                    name: "OffchainLookup",
                    type: "error",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "urls",
                        type: "string[]"
                    }, {
                        name: "callData",
                        type: "bytes"
                    }, {
                        name: "callbackFunction",
                        type: "bytes4"
                    }, {
                        name: "extraData",
                        type: "bytes"
                    }]
                };
            async function w(e, {
                blockNumber: t,
                blockTag: a,
                data: s,
                to: n
            }) {
                let {
                    args: o
                } = (0, f.p)({
                    data: s,
                    abi: [b]
                }), [i, l, y, m, w] = o, {
                    ccipRead: k
                } = e, O = k && "function" == typeof k ? .request ? k.request : g;
                try {
                    if (!(0, p.E)(n, i)) throw new u({
                        sender: i,
                        to: n
                    });
                    let s = await O({
                            data: y,
                            sender: i,
                            urls: l
                        }),
                        {
                            data: o
                        } = await (0, r.R)(e, {
                            blockNumber: t,
                            blockTag: a,
                            data: (0, h.zo)([m, (0, d.E)([{
                                type: "bytes"
                            }, {
                                type: "bytes"
                            }], [s, w])]),
                            to: n
                        });
                    return o
                } catch (e) {
                    throw new c({
                        callbackSelector: m,
                        cause: e,
                        data: s,
                        extraData: w,
                        sender: i,
                        urls: l
                    })
                }
            }
            async function g({
                data: e,
                sender: t,
                urls: a
            }) {
                let r = Error("An unknown error occurred.");
                for (let n = 0; n < a.length; n++) {
                    let o = a[n],
                        c = o.includes("{data}") ? "GET" : "POST",
                        u = "POST" === c ? {
                            data: e,
                            sender: t
                        } : void 0;
                    try {
                        let a;
                        let n = await fetch(o.replace("{sender}", t).replace("{data}", e), {
                            body: JSON.stringify(u),
                            method: c
                        });
                        if (a = n.headers.get("Content-Type") ? .startsWith("application/json") ? (await n.json()).data : await n.text(), !n.ok) {
                            r = new l.Gg({
                                body: u,
                                details: a ? .error ? (0, s.P)(a.error) : n.statusText,
                                headers: n.headers,
                                status: n.status,
                                url: o
                            });
                            continue
                        }
                        if (!(0, y.v)(a)) {
                            r = new i({
                                result: a,
                                url: o
                            });
                            continue
                        }
                        return a
                    } catch (e) {
                        r = new l.Gg({
                            body: u,
                            details: e.message,
                            url: o
                        })
                    }
                }
                throw r
            }
        }
    }
]);