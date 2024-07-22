"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4586], {
        91898: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return a
                }
            });
            let a = e => {
                for (let [t, n] of [
                        [1e3, 2],
                        [1e4, 9],
                        [5e4, 15],
                        [1e5, 24],
                        [2e5, 36],
                        [5e5, 48],
                        [1e6, 60],
                        [1 / 0, 75]
                    ])
                    if (e <= t) return n;
                return 75
            };
            t.Z = [
                [1, 1],
                [6, 5.5],
                [12, 10]
            ]
        },
        71892: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return c
                }
            });
            var a = n(92284),
                s = n(78572),
                r = n(26828),
                i = n(95168),
                o = n(44823),
                u = n(62856),
                d = n(76658),
                p = n(68444),
                l = n(14364),
                y = n(68919);
            let c = e => {
                let {
                    stakeId: t,
                    onComplete: n,
                    open: c,
                    onOpenChange: m,
                    ...f
                } = e, [x, b] = (0, s.useState)(3), {
                    data: T
                } = (0, d.p)(), [h, g] = (0, s.useState)(!1), {
                    toast: v
                } = (0, y.pm)(), {
                    startPoll: w,
                    stopPoll: k
                } = (0, l.Z)({
                    cb: (e, t) => fetch("/api/staking/extend/status?stakeId=".concat(e, "&prevDuration=").concat(t)).then(e => e.json()).then(e => e.extended),
                    stopWhen: e => e,
                    onStop: () => {
                        v({
                            title: "Stake period has been extended"
                        }), null == m || m(!1), n()
                    }
                }), N = (0, s.useCallback)(async () => {
                    if (T) try {
                        g(!0);
                        let [e] = await Promise.all([fetch("/api/staking/extend/duration?stakeId=".concat(t)).then(e => e.json()), T.writeContract({
                            address: "0xF5Bc87917BaBD095061A5c31eE009489f1b87A0B",
                            abi: p,
                            functionName: "extendUnlockTime",
                            args: [t, 2678400 * x]
                        })]);
                        k(), w(t, e)
                    } catch (e) {
                        k(), g(!1), v({
                            title: "Failed to extend",
                            description: JSON.stringify(e)
                        })
                    }
                }, [T, t, x, w, k, v]);
                return (0, a.jsx)(r.Vq, { ...f,
                    open: c,
                    onOpenChange: m,
                    children: (0, a.jsxs)(r.cZ, {
                        className: "bg-[#18181B] border-none rounded-[24px] p-8 w-[350px] md:w-[450px]",
                        children: [(0, a.jsx)(r.$N, {
                            className: "text-white text-center font-[600] text-[28px]",
                            children: "Extend your subscription by"
                        }), (0, a.jsx)(r.Be, {
                            className: "text-[#54597C] w-full text-center font-[500] text-[16px]",
                            children: (0, a.jsx)("div", {
                                className: "flex gap-4 w-full max-w-96 m-auto mt-4",
                                children: [3, 6, 12].map(e => (0, a.jsxs)("div", {
                                    onClick: () => b(e),
                                    className: (0, u.Z)("border-[#F44336] w-1/3 border-solid border-2 px-3 py-12 cursor-pointer hover:border-red-700 text-center", e === x ? "border-green-400 bg-green-400" : null),
                                    children: [(0, a.jsx)("p", {
                                        className: "text-6xl",
                                        children: e
                                    }), (0, a.jsx)("p", {
                                        children: "Months"
                                    })]
                                }, e))
                            })
                        }), (0, a.jsxs)(i.z, {
                            type: "button",
                            onClick: N,
                            variant: "custom",
                            disabled: h,
                            children: [h && (0, a.jsx)(o.BGW, {
                                className: "mr-2 animate-spin"
                            }), "Extend Subscription"]
                        })]
                    })
                })
            }
        },
        95168: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return d
                }
            });
            var a = n(92284),
                s = n(78572),
                r = n(1985),
                i = n(73918),
                o = n(24009);
            let u = (0, i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline",
                            custom: "text-white font-[600] text-[16px] bg-[#F44336] hover:bg-[#fe3b2d] rounded-[12px] w-full"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                d = s.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: s,
                        size: i,
                        asChild: d = !1,
                        ...p
                    } = e, l = d ? r.g7 : "button";
                    return (0, a.jsx)(l, {
                        className: (0, o.cn)(u({
                            variant: s,
                            size: i,
                            className: n
                        })),
                        ref: t,
                        ...p
                    })
                });
            d.displayName = "Button"
        },
        26828: function(e, t, n) {
            n.d(t, {
                $N: function() {
                    return c
                },
                Be: function() {
                    return m
                },
                Vq: function() {
                    return u
                },
                cZ: function() {
                    return l
                },
                fK: function() {
                    return y
                }
            });
            var a = n(92284),
                s = n(78572),
                r = n(60248),
                i = n(94752),
                o = n(24009);
            let u = r.fC;
            r.xz;
            let d = r.h_;
            r.x8;
            let p = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, a.jsx)(r.aV, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...s
                })
            });
            p.displayName = r.aV.displayName;
            let l = s.forwardRef((e, t) => {
                let {
                    className: n,
                    children: s,
                    ...u
                } = e;
                return (0, a.jsxs)(d, {
                    children: [(0, a.jsx)(p, {}), (0, a.jsxs)(r.VY, {
                        ref: t,
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-[24px]", n),
                        ...u,
                        children: [s, (0, a.jsxs)(r.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, a.jsx)(i.Z, {
                                className: "h-4 w-4 text-white"
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            l.displayName = r.VY.displayName;
            let y = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...n
                })
            };
            y.displayName = "DialogHeader";
            let c = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, a.jsx)(r.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", n),
                    ...s
                })
            });
            c.displayName = r.Dx.displayName;
            let m = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, a.jsx)(r.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", n),
                    ...s
                })
            });
            m.displayName = r.dk.displayName
        },
        75305: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return r
                }
            });
            var a = n(92284),
                s = n(24009);

            function r(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("animate-pulse rounded-md bg-primary/10", t),
                    ...n
                })
            }
        },
        68919: function(e, t, n) {
            n.d(t, {
                pm: function() {
                    return y
                }
            });
            var a = n(78572);
            let s = 0,
                r = new Map,
                i = e => {
                    if (r.has(e)) return;
                    let t = setTimeout(() => {
                        r.delete(e), p({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    r.set(e, t)
                },
                o = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return { ...e,
                                toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return { ...e,
                                toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST":
                            {
                                let {
                                    toastId: n
                                } = t;
                                return n ? i(n) : e.toasts.forEach(e => {
                                    i(e.id)
                                }),
                                { ...e,
                                    toasts: e.toasts.map(e => e.id === n || void 0 === n ? { ...e,
                                        open: !1
                                    } : e)
                                }
                            }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return { ...e,
                                toasts: []
                            };
                            return { ...e,
                                toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                u = [],
                d = {
                    toasts: []
                };

            function p(e) {
                d = o(d, e), u.forEach(e => {
                    e(d)
                })
            }

            function l(e) {
                let { ...t
                } = e, n = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(), a = () => p({
                    type: "DISMISS_TOAST",
                    toastId: n
                });
                return p({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: n,
                        open: !0,
                        onOpenChange: e => {
                            e || a()
                        }
                    }
                }), {
                    id: n,
                    dismiss: a,
                    update: e => p({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: n
                        }
                    })
                }
            }

            function y() {
                let [e, t] = a.useState(d);
                return a.useEffect(() => (u.push(t), () => {
                    let e = u.indexOf(t);
                    e > -1 && u.splice(e, 1)
                }), [e]), { ...e,
                    toast: l,
                    dismiss: e => p({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        14364: function(e, t, n) {
            var a = n(78572);
            t.Z = e => {
                let {
                    cb: t,
                    stopWhen: n,
                    onStop: s,
                    interval: r = 3e3
                } = e, i = (0, a.useRef)();
                (0, a.useEffect)(() => () => clearInterval(i.current), []);
                let o = (0, a.useCallback)(() => {
                        clearInterval(i.current)
                    }, []),
                    u = (0, a.useCallback)(function() {
                        for (var e = arguments.length, a = Array(e), u = 0; u < e; u++) a[u] = arguments[u];
                        i.current = setInterval(() => {
                            t(...a).then(e => {
                                n(e) && (o(), null == s || s(e))
                            })
                        }, r)
                    }, [t, r, s, o, n]);
                return {
                    startPoll: u,
                    stopPoll: o
                }
            }
        },
        24009: function(e, t, n) {
            n.d(t, {
                cn: function() {
                    return r
                },
                p6: function() {
                    return u
                },
                sZ: function() {
                    return d
                },
                vh: function() {
                    return p
                },
                zs: function() {
                    return i
                }
            });
            var a = n(62856),
                s = n(63278);

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, s.m6)((0, a.W)(t))
            }
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        n = "";
                    for (let a = 0; a < e; a++) n += t.charAt(Math.floor(Math.random() * t.length));
                    return n
                },
                o = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "medium"
                }),
                u = e => o.format(new Date(e)).toString(),
                d = e => Math.round((Date.now() - new Date(e).getTime()) / 864e5),
                p = e => e.length <= 10 ? e : e.slice(0, 5) + "..." + e.slice(-5)
        },
        68444: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"stakeId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"Extended","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"stakeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"stakeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address[]","name":"users","type":"address[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"stakeId","type":"bytes32"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"extendUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_opsec","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"opsec","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"stakeId","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stakes","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"unstaked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"stakeId","type":"bytes32"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        }
    }
]);