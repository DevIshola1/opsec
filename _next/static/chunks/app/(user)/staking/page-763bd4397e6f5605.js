(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1935], {
        41602: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 13012)), Promise.resolve().then(r.bind(r, 74230)), Promise.resolve().then(r.bind(r, 87353)), Promise.resolve().then(r.bind(r, 52539))
        },
        13012: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r(92284),
                n = r(78572),
                s = r(98237),
                i = r(44823),
                o = r(58763),
                l = r(76658),
                d = r(3531),
                c = r(75305),
                u = r(95168),
                f = r(68919),
                m = r(95026),
                x = r(24009),
                h = r(68444),
                p = r(71892);
            t.default = () => {
                let {
                    toast: e
                } = (0, f.pm)(), {
                    isPending: t,
                    data: r
                } = (0, s.a)({
                    queryKey: ["staking-history"],
                    queryFn: () => fetch("/api/staking").then(e => e.json())
                }), {
                    data: b,
                    refetch: g
                } = (0, s.a)({
                    queryKey: ["staking-history-onchain"],
                    queryFn: () => Promise.all(r ? r.map(e => m.z.readContract({
                        abi: h,
                        address: "0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B",
                        functionName: "stakes",
                        args: [e.stakeId]
                    }).then(e => e)) : [])
                }), {
                    data: j
                } = (0, l.p)(), [v, w] = (0, n.useState)(), [y, N] = (0, n.useState)([]), k = (0, n.useCallback)(async t => {
                    if (void 0 !== j) try {
                        N(e => e.concat(t));
                        let r = await j.writeContract({
                                abi: h,
                                address: "0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B",
                                functionName: "unstake",
                                args: [t]
                            }),
                            a = await m.z.waitForTransactionReceipt({
                                hash: r
                            });
                        if ("success" !== a.status) throw Error("TX reverted");
                        g(), e({
                            title: "Unstake has succeeded"
                        })
                    } catch (t) {
                        e({
                            title: "Transaction failed"
                        })
                    } finally {
                        N(e => e.filter(e => e !== t))
                    }
                }, [g, e, j]);
                return (0, n.useEffect)(() => {
                    g()
                }, [r, g]), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("p", {
                        className: "my-3",
                        children: "Staking History"
                    }), (0, a.jsxs)("div", {
                        className: "border border-[#FFFFFF33] rounded-[16px]",
                        children: [(0, a.jsxs)(d.iA, {
                            children: [(0, a.jsx)(d.xD, {
                                children: (0, a.jsxs)(d.SC, {
                                    className: "border-b-[#FFFFFF4D]",
                                    children: [(0, a.jsx)(d.ss, {
                                        children: "#"
                                    }), (0, a.jsx)(d.ss, {
                                        children: "Node"
                                    }), (0, a.jsx)(d.ss, {
                                        children: "Amount"
                                    }), (0, a.jsx)(d.ss, {
                                        children: "Duration"
                                    }), (0, a.jsx)(d.ss, {
                                        children: "Unlock remaining"
                                    }), (0, a.jsx)(d.ss, {
                                        children: "Date"
                                    })]
                                })
                            }), (0, a.jsx)(d.RM, {
                                children: t ? (0, a.jsx)(d.SC, {
                                    children: (0, a.jsx)(d.pj, {
                                        colSpan: 6,
                                        children: (0, a.jsx)(c.O, {
                                            className: "rounded-lg w-full h-[64px] mr-2 block"
                                        })
                                    })
                                }) : r && 0 !== r.length ? r.map((e, t) => {
                                    var r;
                                    let n = Math.round(e.duration - (Date.now() - new Date(e.date).getTime()) / 1e3 / 3600 / 24),
                                        s = y.some(t => t === e.stakeId);
                                    return (0, a.jsxs)(d.SC, {
                                        className: "border-b-none",
                                        children: [(0, a.jsx)(d.pj, {
                                            className: "text-[16px] font-[600] text-white",
                                            children: t + 1
                                        }), (0, a.jsx)(d.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: e.node.blockchain.name
                                        }), (0, a.jsx)(d.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: (null == b ? void 0 : b[t]) ? (0, o.b)(b[t][1], 18) : void 0
                                        }), (0, a.jsxs)(d.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: [e.duration, " days"]
                                        }), (0, a.jsx)(d.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px] flex gap-2",
                                            children: n >= 0 ? (0, a.jsxs)(a.Fragment, {
                                                children: ["`$", n, " days`", (0, a.jsx)(u.z, {
                                                    onClick: () => w(e.stakeId),
                                                    children: "Extend"
                                                })]
                                            }) : void 0 === b ? "0 days" : (null === (r = b[t]) || void 0 === r ? void 0 : r[4]) ? "Unstaked" : (0, a.jsxs)(u.z, {
                                                onClick: () => k(e.stakeId),
                                                disabled: s,
                                                children: [s && (0, a.jsx)(i.BGW, {
                                                    className: "mr-2 animate-spin"
                                                }), "Unstake"]
                                            })
                                        }), (0, a.jsx)(d.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: (0, x.p6)(e.date)
                                        })]
                                    }, t)
                                }) : (0, a.jsx)(d.SC, {
                                    children: (0, a.jsx)(d.pj, {
                                        colSpan: 6,
                                        className: "text-center",
                                        children: "No Data"
                                    })
                                })
                            })]
                        }), (0, a.jsx)(p.I, {
                            stakeId: null != v ? v : "",
                            open: void 0 !== v,
                            onOpenChange: () => w(void 0),
                            onComplete: () => g()
                        })]
                    })]
                })
            }
        },
        74230: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r(92284),
                n = r(78572),
                s = r(98237),
                i = r(58763),
                o = r(3531),
                l = r(75305),
                d = r(95026),
                c = r(24009),
                u = r(68444);
            t.default = () => {
                let {
                    isPending: e,
                    data: t
                } = (0, s.a)({
                    queryKey: ["staking-progress"],
                    queryFn: () => fetch("/api/staking/list").then(e => e.json())
                }), {
                    data: r,
                    refetch: f
                } = (0, s.a)({
                    queryKey: ["staking-progress-onchain"],
                    queryFn: () => Promise.all(t ? t.map(e => d.z.readContract({
                        abi: u,
                        address: "0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B",
                        functionName: "stakes",
                        args: [e.stakeId]
                    }).then(e => e)) : [])
                });
                return ((0, n.useEffect)(() => {
                    f()
                }, [t, f]), t && 0 !== t.length) ? (0, a.jsxs)("div", {
                    className: "mt-12",
                    children: [(0, a.jsx)("p", {
                        children: "Currently working on rewards for the following stakings"
                    }), (0, a.jsx)("hr", {
                        className: "my-4"
                    }), (0, a.jsx)("div", {
                        className: "border border-[#FFFFFF33] rounded-[16px]",
                        children: (0, a.jsxs)(o.iA, {
                            children: [(0, a.jsx)(o.xD, {
                                children: (0, a.jsxs)(o.SC, {
                                    className: "border-b-[#FFFFFF4D]",
                                    children: [(0, a.jsx)(o.ss, {
                                        children: "#"
                                    }), (0, a.jsx)(o.ss, {
                                        children: "Stake Id"
                                    }), (0, a.jsx)(o.ss, {
                                        children: "Amount"
                                    }), (0, a.jsx)(o.ss, {
                                        children: "Duration"
                                    }), (0, a.jsx)(o.ss, {
                                        children: "Unlock remaining"
                                    }), (0, a.jsx)(o.ss, {
                                        children: "Date"
                                    })]
                                })
                            }), (0, a.jsx)(o.RM, {
                                children: e ? (0, a.jsx)(o.SC, {
                                    children: (0, a.jsx)(o.pj, {
                                        colSpan: 6,
                                        children: (0, a.jsx)(l.O, {
                                            className: "rounded-lg w-full h-[64px] mr-2 block"
                                        })
                                    })
                                }) : t && 0 !== t.length ? t.map((e, t) => {
                                    let n = (null == r ? void 0 : r[t]) ? Number(r[t][2]) / 3600 / 24 : void 0,
                                        s = n ? Math.round(n - (Date.now() - new Date(e.createdAt).getTime()) / 1e3 / 3600 / 24) : void 0;
                                    return (0, a.jsxs)(o.SC, {
                                        className: "border-b-none",
                                        children: [(0, a.jsx)(o.pj, {
                                            className: "text-[16px] font-[600] text-white",
                                            children: t + 1
                                        }), (0, a.jsx)(o.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            title: e.stakeId,
                                            children: (0, c.vh)(e.stakeId)
                                        }), (0, a.jsx)(o.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: (null == r ? void 0 : r[t]) ? (0, i.b)(r[t][1], 18) : void 0
                                        }), (0, a.jsx)(o.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: n && (0, a.jsxs)(a.Fragment, {
                                                children: [Math.round(n), " days"]
                                            })
                                        }), (0, a.jsx)(o.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: s && (0, a.jsxs)(a.Fragment, {
                                                children: [s, " days"]
                                            })
                                        }), (0, a.jsx)(o.pj, {
                                            className: "text-[16px] font-[600] text-white max-md:min-w-[130px]",
                                            children: (0, c.p6)(e.createdAt)
                                        })]
                                    }, t)
                                }) : (0, a.jsx)(o.SC, {
                                    children: (0, a.jsx)(o.pj, {
                                        colSpan: 6,
                                        className: "text-center",
                                        children: "No Data"
                                    })
                                })
                            })]
                        })
                    })]
                }) : null
            }
        },
        87353: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var a = r(92284),
                n = r(78572),
                s = r(44823),
                i = r(95168),
                o = r(10230),
                l = r(66997),
                d = r(96123),
                c = r(35526),
                u = r(53319),
                f = r(66991),
                m = r(72585);

            function x(e = {}) {
                let {
                    abi: t,
                    address: r,
                    functionName: a,
                    query: n = {}
                } = e, s = (0, m.Z)(e), i = (0, f.x)({
                    config: s
                }), o = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: r
                        }) {
                            let a = t.abi;
                            if (!a) throw Error("abi is required");
                            let {
                                address: n,
                                functionName: s,
                                scopeKey: i,
                                ...o
                            } = r[1];
                            if (!n) throw Error("address is required");
                            if (!s) throw Error("functionName is required");
                            let l = o.args;
                            return (0, d.L)(e, {
                                abi: a,
                                address: n,
                                functionName: s,
                                args: l,
                                ...o
                            })
                        },
                        queryKey: function(e = {}) {
                            let {
                                abi: t,
                                ...r
                            } = e;
                            return ["readContract", (0, c.OP)(r)]
                        }(t)
                    }
                }(s, { ...e,
                    chainId: e.chainId ? ? i
                }), l = !!(r && t && a && (n.enabled ? ? !0));
                return (0, u.aM)({ ...n,
                    ...o,
                    enabled: l,
                    structuralSharing: n.structuralSharing ? ? c.if
                })
            }
            var h = r(76658),
                p = r(24009),
                b = r(58763),
                g = r(68444),
                j = r(68919),
                v = r(97812),
                w = r(95026),
                y = r(62856),
                N = r(91898),
                k = r(98237),
                F = r(14364),
                C = () => {
                    let {
                        address: e
                    } = (0, l.m)(), {
                        data: t,
                        refetch: r
                    } = x({
                        abi: v.Wo,
                        address: "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
                        functionName: "balanceOf",
                        args: [e]
                    }), {
                        data: d,
                        refetch: c
                    } = x({
                        abi: v.Wo,
                        address: "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
                        functionName: "allowance",
                        args: [e, "0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B"]
                    }), {
                        data: u
                    } = (0, h.p)(), [f, m] = (0, n.useState)(3), [C, S] = (0, n.useState)(1e3), [T, A] = (0, n.useState)(), {
                        toast: D
                    } = (0, j.pm)(), {
                        refetch: R
                    } = (0, k.a)({
                        queryKey: ["staking-progress"],
                        queryFn: () => fetch("/api/staking/list").then(e => e.json())
                    }), {
                        startPoll: B,
                        stopPoll: I
                    } = (0, F.Z)({
                        cb: e => fetch("/api/staking/add/status?stakeId=".concat(e)).then(e => e.json()).then(e => e.added),
                        stopWhen: e => e,
                        onStop: () => {
                            D({
                                title: "Stake completed"
                            }), r(), A(void 0), R()
                        }
                    }), E = (0, n.useCallback)(async () => {
                        if (void 0 !== u && void 0 !== d) try {
                            let e = function(e, t) {
                                let [r, a = "0"] = e.split("."), n = r.startsWith("-");
                                if (n && (r = r.slice(1)), a = a.replace(/(0+)$/, ""), 0 === t) 1 === Math.round(Number(`.${a}`)) && (r = `${BigInt(r)+1n}`), a = "";
                                else if (a.length > t) {
                                    let [e, n, s] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)], i = Math.round(Number(`${n}.${s}`));
                                    (a = i > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${i}`).length > t && (a = a.slice(1), r = `${BigInt(r)+1n}`), a = a.slice(0, t)
                                } else a = a.padEnd(t, "0");
                                return BigInt(`${n?"-":""}${r}${a}`)
                            }(String(C), 18);
                            if (d < e) {
                                A("approving");
                                let t = await u.writeContract({
                                        address: "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
                                        abi: v.Wo,
                                        functionName: "approve",
                                        args: ["0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B", e]
                                    }),
                                    r = await w.z.waitForTransactionReceipt({
                                        hash: t
                                    });
                                if ("success" !== r.status) throw Error("TX reverted")
                            }
                            c(), A("staking");
                            let t = new TextEncoder,
                                r = t.encode((0, p.zs)(32)),
                                a = "0x".concat(Array.from(r, e => e.toString(16).padStart(2, "0")).join(""));
                            await u.writeContract({
                                address: "0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B",
                                abi: g,
                                functionName: "stake",
                                args: [a, e, 2678400 * f]
                            }), I(), B(a)
                        } catch (e) {
                            I(), A(void 0), D({
                                title: "Transaction failed",
                                description: JSON.stringify(e)
                            });
                            return
                        }
                    }, [d, C, f, c, B, I, D, u]);
                    if (void 0 === t) return null;
                    let M = Math.floor(Number((0, b.b)(t, 18)));
                    return (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [(0, a.jsx)("p", {
                            children: "Staking period"
                        }), (0, a.jsx)("div", {
                            className: "flex gap-4 w-full max-w-96 m-auto mt-4",
                            children: [3].map(e => (0, a.jsxs)("div", {
                                onClick: () => m(e),
                                className: (0, y.Z)("border-[#F44336] w-1/3 border-solid border-2 px-3 py-12 cursor-pointer hover:border-red-700 text-center", e === f ? "border-green-400 bg-green-400" : null, "w-full"),
                                children: [(0, a.jsx)("p", {
                                    className: "text-6xl",
                                    children: e
                                }), (0, a.jsx)("p", {
                                    children: "Months"
                                })]
                            }, e))
                        }), (0, a.jsxs)("p", {
                            className: "mt-12",
                            children: ["Stake ", C, " $OPSEC", (0, a.jsx)("br", {}), "and you will get ", (0, N.A)(C), " nodes for reward"]
                        }), M > 0 ? (0, a.jsx)(o.i, {
                            value: [C],
                            min: 1,
                            max: M,
                            step: 1,
                            className: "my-4",
                            onValueChange: e => {
                                let [t] = e;
                                return S(t)
                            }
                        }) : (0, a.jsx)("p", {
                            className: "text-yellow-500 mt-8",
                            children: "Not enough $OPSEC in your wallet."
                        }), (0, a.jsxs)(i.z, {
                            onClick: E,
                            variant: "custom",
                            className: "max-w-32 mt-12",
                            disabled: void 0 !== T || 0 === M,
                            children: [void 0 !== T && (0, a.jsx)(s.BGW, {
                                className: "mr-2 animate-spin"
                            }), "Stake"]
                        }), "approving" === T && (0, a.jsx)("p", {
                            className: "text-gray-400 mt-4",
                            children: "Approving your $OPSEC balance to be handled by staking contract"
                        }), "staking" === T && (0, a.jsx)("p", {
                            className: "text-gray-400 mt-4",
                            children: "Staking your $OPSEC balance"
                        })]
                    })
                }
        },
        10230: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return o
                }
            });
            var a = r(92284),
                n = r(78572),
                s = r(43945),
                i = r(24009);
            let o = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsxs)(s.fC, {
                    ref: t,
                    className: (0, i.cn)("relative flex w-full touch-none select-none items-center", r),
                    ...n,
                    children: [(0, a.jsx)(s.fQ, {
                        className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
                        children: (0, a.jsx)(s.e6, {
                            className: "absolute h-full bg-primary"
                        })
                    }), (0, a.jsx)(s.bU, {
                        className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    })]
                })
            });
            o.displayName = s.fC.displayName
        },
        3531: function(e, t, r) {
            "use strict";
            r.d(t, {
                RM: function() {
                    return l
                },
                SC: function() {
                    return c
                },
                iA: function() {
                    return i
                },
                pj: function() {
                    return f
                },
                ss: function() {
                    return u
                },
                xD: function() {
                    return o
                }
            });
            var a = r(92284),
                n = r(78572),
                s = r(24009);
            let i = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative w-full overflow-auto",
                    children: (0, a.jsx)("table", {
                        ref: t,
                        className: (0, s.cn)("w-full caption-bottom text-sm", r),
                        ...n
                    })
                })
            });
            i.displayName = "Table";
            let o = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("thead", {
                    ref: t,
                    className: (0, s.cn)("[&_tr]:border-b", r),
                    ...n
                })
            });
            o.displayName = "TableHeader";
            let l = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("tbody", {
                    ref: t,
                    className: (0, s.cn)("[&_tr:last-child]:border-0", r),
                    ...n
                })
            });
            l.displayName = "TableBody";
            let d = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("tfoot", {
                    ref: t,
                    className: (0, s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", r),
                    ...n
                })
            });
            d.displayName = "TableFooter";
            let c = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("tr", {
                    ref: t,
                    className: (0, s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", r),
                    ...n
                })
            });
            c.displayName = "TableRow";
            let u = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("th", {
                    ref: t,
                    className: (0, s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", r),
                    ...n
                })
            });
            u.displayName = "TableHead";
            let f = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("td", {
                    ref: t,
                    className: (0, s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", r),
                    ...n
                })
            });
            f.displayName = "TableCell";
            let m = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("caption", {
                    ref: t,
                    className: (0, s.cn)("mt-4 text-sm text-muted-foreground", r),
                    ...n
                })
            });
            m.displayName = "TableCaption"
        },
        52539: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Tabs: function() {
                    return G
                },
                TabsContent: function() {
                    return Z
                },
                TabsList: function() {
                    return H
                },
                TabsTrigger: function() {
                    return J
                }
            });
            var a = r(92284),
                n = r(78572),
                s = r(69237),
                i = r(62016),
                o = r(31141),
                l = r(15232),
                d = r(59618),
                c = r(21373),
                u = r(61957),
                f = r(59021),
                m = r(97291),
                x = "rovingFocusGroup.onEntryFocus",
                h = {
                    bubbles: !1,
                    cancelable: !0
                },
                p = "RovingFocusGroup",
                [b, g, j] = (0, o.B)(p),
                [v, w] = (0, i.b)(p, [j]),
                [y, N] = v(p),
                k = n.forwardRef((e, t) => (0, a.jsx)(b.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, a.jsx)(b.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, a.jsx)(F, { ...e,
                            ref: t
                        })
                    })
                }));
            k.displayName = p;
            var F = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: i,
                        loop: o = !1,
                        dir: d,
                        currentTabStopId: p,
                        defaultCurrentTabStopId: b,
                        onCurrentTabStopIdChange: j,
                        onEntryFocus: v,
                        preventScrollOnEntryFocus: w = !1,
                        ...N
                    } = e, k = n.useRef(null), F = (0, l.e)(t, k), C = (0, m.gm)(d), [S = null, T] = (0, f.T)({
                        prop: p,
                        defaultProp: b,
                        onChange: j
                    }), [D, R] = n.useState(!1), B = (0, u.W)(v), I = g(r), E = n.useRef(!1), [M, $] = n.useState(0);
                    return n.useEffect(() => {
                        let e = k.current;
                        if (e) return e.addEventListener(x, B), () => e.removeEventListener(x, B)
                    }, [B]), (0, a.jsx)(y, {
                        scope: r,
                        orientation: i,
                        dir: C,
                        loop: o,
                        currentTabStopId: S,
                        onItemFocus: n.useCallback(e => T(e), [T]),
                        onItemShiftTab: n.useCallback(() => R(!0), []),
                        onFocusableItemAdd: n.useCallback(() => $(e => e + 1), []),
                        onFocusableItemRemove: n.useCallback(() => $(e => e - 1), []),
                        children: (0, a.jsx)(c.WV.div, {
                            tabIndex: D || 0 === M ? -1 : 0,
                            "data-orientation": i,
                            ...N,
                            ref: F,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, s.M)(e.onMouseDown, () => {
                                E.current = !0
                            }),
                            onFocus: (0, s.M)(e.onFocus, e => {
                                let t = !E.current;
                                if (e.target === e.currentTarget && t && !D) {
                                    let t = new CustomEvent(x, h);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = I().filter(e => e.focusable),
                                            t = e.find(e => e.active),
                                            r = e.find(e => e.id === S),
                                            a = [t, r, ...e].filter(Boolean),
                                            n = a.map(e => e.ref.current);
                                        A(n, w)
                                    }
                                }
                                E.current = !1
                            }),
                            onBlur: (0, s.M)(e.onBlur, () => R(!1))
                        })
                    })
                }),
                C = "RovingFocusGroupItem",
                S = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: i = !0,
                        active: o = !1,
                        tabStopId: l,
                        ...u
                    } = e, f = (0, d.M)(), m = l || f, x = N(C, r), h = x.currentTabStopId === m, p = g(r), {
                        onFocusableItemAdd: j,
                        onFocusableItemRemove: v
                    } = x;
                    return n.useEffect(() => {
                        if (i) return j(), () => v()
                    }, [i, j, v]), (0, a.jsx)(b.ItemSlot, {
                        scope: r,
                        id: m,
                        focusable: i,
                        active: o,
                        children: (0, a.jsx)(c.WV.span, {
                            tabIndex: h ? 0 : -1,
                            "data-orientation": x.orientation,
                            ...u,
                            ref: t,
                            onMouseDown: (0, s.M)(e.onMouseDown, e => {
                                i ? x.onItemFocus(m) : e.preventDefault()
                            }),
                            onFocus: (0, s.M)(e.onFocus, () => x.onItemFocus(m)),
                            onKeyDown: (0, s.M)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) {
                                    x.onItemShiftTab();
                                    return
                                }
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, r) {
                                    var a;
                                    let n = (a = e.key, "rtl" !== r ? a : "ArrowLeft" === a ? "ArrowRight" : "ArrowRight" === a ? "ArrowLeft" : a);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return T[n]
                                }(e, x.orientation, x.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let n = p().filter(e => e.focusable),
                                        s = n.map(e => e.ref.current);
                                    if ("last" === t) s.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        var r, a;
                                        "prev" === t && s.reverse();
                                        let n = s.indexOf(e.currentTarget);
                                        s = x.loop ? (r = s, a = n + 1, r.map((e, t) => r[(a + t) % r.length])) : s.slice(n + 1)
                                    }
                                    setTimeout(() => A(s))
                                }
                            })
                        })
                    })
                });
            S.displayName = C;
            var T = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function A(e, t = !1) {
                let r = document.activeElement;
                for (let a of e)
                    if (a === r || (a.focus({
                            preventScroll: t
                        }), document.activeElement !== r)) return
            }
            var D = r(72159),
                R = "Tabs",
                [B, I] = (0, i.b)(R, [w]),
                E = w(),
                [M, $] = B(R),
                K = n.forwardRef((e, t) => {
                    let {
                        __scopeTabs: r,
                        value: n,
                        onValueChange: s,
                        defaultValue: i,
                        orientation: o = "horizontal",
                        dir: l,
                        activationMode: u = "automatic",
                        ...x
                    } = e, h = (0, m.gm)(l), [p, b] = (0, f.T)({
                        prop: n,
                        onChange: s,
                        defaultProp: i
                    });
                    return (0, a.jsx)(M, {
                        scope: r,
                        baseId: (0, d.M)(),
                        value: p,
                        onValueChange: b,
                        orientation: o,
                        dir: h,
                        activationMode: u,
                        children: (0, a.jsx)(c.WV.div, {
                            dir: h,
                            "data-orientation": o,
                            ...x,
                            ref: t
                        })
                    })
                });
            K.displayName = R;
            var P = "TabsList",
                q = n.forwardRef((e, t) => {
                    let {
                        __scopeTabs: r,
                        loop: n = !0,
                        ...s
                    } = e, i = $(P, r), o = E(r);
                    return (0, a.jsx)(k, {
                        asChild: !0,
                        ...o,
                        orientation: i.orientation,
                        dir: i.dir,
                        loop: n,
                        children: (0, a.jsx)(c.WV.div, {
                            role: "tablist",
                            "aria-orientation": i.orientation,
                            ...s,
                            ref: t
                        })
                    })
                });
            q.displayName = P;
            var W = "TabsTrigger",
                O = n.forwardRef((e, t) => {
                    let {
                        __scopeTabs: r,
                        value: n,
                        disabled: i = !1,
                        ...o
                    } = e, l = $(W, r), d = E(r), u = V(l.baseId, n), f = L(l.baseId, n), m = n === l.value;
                    return (0, a.jsx)(S, {
                        asChild: !0,
                        ...d,
                        focusable: !i,
                        active: m,
                        children: (0, a.jsx)(c.WV.button, {
                            type: "button",
                            role: "tab",
                            "aria-selected": m,
                            "aria-controls": f,
                            "data-state": m ? "active" : "inactive",
                            "data-disabled": i ? "" : void 0,
                            disabled: i,
                            id: u,
                            ...o,
                            ref: t,
                            onMouseDown: (0, s.M)(e.onMouseDown, e => {
                                i || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : l.onValueChange(n)
                            }),
                            onKeyDown: (0, s.M)(e.onKeyDown, e => {
                                [" ", "Enter"].includes(e.key) && l.onValueChange(n)
                            }),
                            onFocus: (0, s.M)(e.onFocus, () => {
                                let e = "manual" !== l.activationMode;
                                m || i || !e || l.onValueChange(n)
                            })
                        })
                    })
                });
            O.displayName = W;
            var z = "TabsContent",
                _ = n.forwardRef((e, t) => {
                    let {
                        __scopeTabs: r,
                        value: s,
                        forceMount: i,
                        children: o,
                        ...l
                    } = e, d = $(z, r), u = V(d.baseId, s), f = L(d.baseId, s), m = s === d.value, x = n.useRef(m);
                    return n.useEffect(() => {
                        let e = requestAnimationFrame(() => x.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, a.jsx)(D.z, {
                        present: i || m,
                        children: ({
                            present: r
                        }) => (0, a.jsx)(c.WV.div, {
                            "data-state": m ? "active" : "inactive",
                            "data-orientation": d.orientation,
                            role: "tabpanel",
                            "aria-labelledby": u,
                            hidden: !r,
                            id: f,
                            tabIndex: 0,
                            ...l,
                            ref: t,
                            style: { ...e.style,
                                animationDuration: x.current ? "0s" : void 0
                            },
                            children: r && o
                        })
                    })
                });

            function V(e, t) {
                return `${e}-trigger-${t}`
            }

            function L(e, t) {
                return `${e}-content-${t}`
            }
            _.displayName = z;
            var U = r(24009);
            let G = K,
                H = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...n
                    } = e;
                    return (0, a.jsx)(q, {
                        ref: t,
                        className: (0, U.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", r),
                        ...n
                    })
                });
            H.displayName = q.displayName;
            let J = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)(O, {
                    ref: t,
                    className: (0, U.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", r),
                    ...n
                })
            });
            J.displayName = O.displayName;
            let Z = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)(_, {
                    ref: t,
                    className: (0, U.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", r),
                    ...n
                })
            });
            Z.displayName = _.displayName
        },
        95026: function(e, t, r) {
            "use strict";
            r.d(t, {
                t: function() {
                    return o
                },
                z: function() {
                    return l
                }
            });
            var a = r(29364),
                n = r(72505),
                s = r(98356),
                i = r(52766);
            let o = Number("1") ? s.R : i.F,
                l = (0, a.v)({
                    chain: o,
                    transport: (0, n.d)("https://eth-mainnet.g.alchemy.com/v2/82iJJrfgo9nWeTeMFBAmAjuDQ-w736xj")
                })
        }
    },
    function(e) {
        e.O(0, [792, 7846, 8237, 3816, 4541, 663, 9351, 6658, 3945, 4586, 7013, 6620, 1744], function() {
            return e(e.s = 41602)
        }), _N_E = e.O()
    }
]);