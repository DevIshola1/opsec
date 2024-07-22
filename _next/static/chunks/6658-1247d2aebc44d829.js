"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6658], {
        76658: function(t, e, n) {
            n.d(e, {
                p: function() {
                    return M
                }
            });
            var a = n(45350),
                r = n(16958),
                s = n(96904);
            async function c(t, {
                chain: e
            }) {
                let {
                    id: n,
                    name: a,
                    nativeCurrency: r,
                    rpcUrls: c,
                    blockExplorers: i
                } = e;
                await t.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: (0, s.eC)(n),
                        chainName: a,
                        nativeCurrency: r,
                        rpcUrls: c.default.http,
                        blockExplorerUrls: i ? Object.values(i).map(({
                            url: t
                        }) => t) : void 0
                    }]
                }, {
                    dedupe: !0,
                    retryCount: 0
                })
            }
            var i = n(66053),
                o = n(92341),
                u = n(30507),
                d = n(24113);

            function l({
                chain: t,
                currentChainId: e
            }) {
                if (!t) throw new d.Bk;
                if (e !== t.id) throw new d.Yl({
                    chain: t,
                    currentChainId: e
                })
            }
            var h = n(64458),
                w = n(36923),
                f = n(58023),
                m = n(19571),
                p = n(31892),
                y = n(22122),
                C = n(49619),
                T = n(31061),
                q = n(71376);
            async function g(t, e) {
                let {
                    account: n = t.account,
                    chain: a = t.chain,
                    accessList: s,
                    blobs: c,
                    data: i,
                    gas: d,
                    gasPrice: g,
                    maxFeePerBlobGas: v,
                    maxFeePerGas: I,
                    maxPriorityFeePerGas: _,
                    nonce: P,
                    to: k,
                    value: E,
                    ...R
                } = e;
                if (!n) throw new u.o({
                    docsPath: "/docs/actions/wallet/sendTransaction"
                });
                let N = (0, o.T)(n);
                try {
                    let n;
                    if ((0, C.F)(e), null !== a && (n = await (0, y.s)(t, r.L, "getChainId")({}), l({
                            currentChainId: n,
                            chain: a
                        })), "local" === N.type) {
                        let e = await (0, y.s)(t, T.Z, "prepareTransactionRequest")({
                                account: N,
                                accessList: s,
                                blobs: c,
                                chain: a,
                                chainId: n,
                                data: i,
                                gas: d,
                                gasPrice: g,
                                maxFeePerBlobGas: v,
                                maxFeePerGas: I,
                                maxPriorityFeePerGas: _,
                                nonce: P,
                                parameters: [...T.Q, "sidecars"],
                                to: k,
                                value: E,
                                ...R
                            }),
                            r = a ? .serializers ? .transaction,
                            o = await N.signTransaction(e, {
                                serializer: r
                            });
                        return await (0, y.s)(t, q.p, "sendRawTransaction")({
                            serializedTransaction: o
                        })
                    }
                    let o = t.chain ? .formatters ? .transactionRequest ? .format,
                        u = o || p.tG,
                        h = u({ ...(0, m.K)(R, {
                                format: o
                            }),
                            accessList: s,
                            blobs: c,
                            chainId: n,
                            data: i,
                            from: N.address,
                            gas: d,
                            gasPrice: g,
                            maxFeePerBlobGas: v,
                            maxFeePerGas: I,
                            maxPriorityFeePerGas: _,
                            nonce: P,
                            to: k,
                            value: E
                        });
                    return await t.request({
                        method: "eth_sendTransaction",
                        params: [h]
                    }, {
                        retryCount: 0
                    })
                } catch (t) {
                    throw function(t, {
                        docsPath: e,
                        ...n
                    }) {
                        let a = (() => {
                            let e = (0, f.k)(t, n);
                            return e instanceof h.cj ? t : e
                        })();
                        return new w.mk(a, {
                            docsPath: e,
                            ...n
                        })
                    }(t, { ...e,
                        account: N,
                        chain: e.chain || void 0
                    })
                }
            }
            var v = n(11964);
            async function I(t) {
                if (t.account ? .type === "local") return [t.account.address];
                let e = await t.request({
                    method: "eth_accounts"
                }, {
                    dedupe: !0
                });
                return e.map(t => (0, v.x)(t))
            }
            async function _(t) {
                let e = await t.request({
                    method: "wallet_getPermissions"
                }, {
                    dedupe: !0
                });
                return e
            }
            async function P(t) {
                let e = await t.request({
                    method: "eth_requestAccounts"
                }, {
                    dedupe: !0,
                    retryCount: 0
                });
                return e.map(t => (0, v.K)(t))
            }
            async function k(t, e) {
                return t.request({
                    method: "wallet_requestPermissions",
                    params: [e]
                }, {
                    retryCount: 0
                })
            }
            var E = n(76381);
            async function R(t, e) {
                let {
                    account: n = t.account,
                    chain: a = t.chain,
                    ...c
                } = e;
                if (!n) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTransaction"
                });
                let i = (0, o.T)(n);
                (0, C.F)({
                    account: i,
                    ...e
                });
                let d = await (0, y.s)(t, r.L, "getChainId")({});
                null !== a && l({
                    currentChainId: d,
                    chain: a
                });
                let h = a ? .formatters || t.chain ? .formatters,
                    w = h ? .transactionRequest ? .format || p.tG;
                return "local" === i.type ? i.signTransaction({ ...c,
                    chainId: d
                }, {
                    serializer: t.chain ? .serializers ? .transaction
                }) : await t.request({
                    method: "eth_signTransaction",
                    params: [{ ...w(c),
                        chainId: (0, s.eC)(d),
                        from: i.address
                    }]
                }, {
                    retryCount: 0
                })
            }
            var N = n(72185);
            async function b(t, e) {
                let {
                    account: n = t.account,
                    domain: a,
                    message: r,
                    primaryType: s
                } = e;
                if (!n) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTypedData"
                });
                let c = (0, o.T)(n),
                    i = {
                        EIP712Domain: (0, N.cj)({
                            domain: a
                        }),
                        ...e.types
                    };
                if ((0, N.iC)({
                        domain: a,
                        message: r,
                        primaryType: s,
                        types: i
                    }), "local" === c.type) return c.signTypedData({
                    domain: a,
                    message: r,
                    primaryType: s,
                    types: i
                });
                let d = (0, N.H6)({
                    domain: a,
                    message: r,
                    primaryType: s,
                    types: i
                });
                return t.request({
                    method: "eth_signTypedData_v4",
                    params: [c.address, d]
                }, {
                    retryCount: 0
                })
            }
            async function x(t, {
                id: e
            }) {
                await t.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: (0, s.eC)(e)
                    }]
                }, {
                    retryCount: 0
                })
            }
            async function A(t, e) {
                let n = await t.request({
                    method: "wallet_watchAsset",
                    params: e
                }, {
                    retryCount: 0
                });
                return n
            }
            var D = n(12693);
            async function F(t, e) {
                let {
                    abi: n,
                    address: a,
                    args: r,
                    dataSuffix: s,
                    functionName: c,
                    ...i
                } = e, o = (0, D.R)({
                    abi: n,
                    args: r,
                    functionName: c
                });
                return (0, y.s)(t, g, "sendTransaction")({
                    data: `${o}${s?s.replace("0x",""):""}`,
                    to: a,
                    ...i
                })
            }

            function K(t) {
                return {
                    addChain: e => c(t, e),
                    deployContract: e => (function(t, e) {
                        let {
                            abi: n,
                            args: a,
                            bytecode: r,
                            ...s
                        } = e, c = (0, i.w)({
                            abi: n,
                            args: a,
                            bytecode: r
                        });
                        return g(t, { ...s,
                            data: c
                        })
                    })(t, e),
                    getAddresses: () => I(t),
                    getChainId: () => (0, r.L)(t),
                    getPermissions: () => _(t),
                    prepareTransactionRequest: e => (0, T.Z)(t, e),
                    requestAddresses: () => P(t),
                    requestPermissions: e => k(t, e),
                    sendRawTransaction: e => (0, q.p)(t, e),
                    sendTransaction: e => g(t, e),
                    signMessage: e => (0, E.l)(t, e),
                    signTransaction: e => R(t, e),
                    signTypedData: e => b(t, e),
                    switchChain: e => x(t, e),
                    watchAsset: e => A(t, e),
                    writeContract: e => F(t, e)
                }
            }
            var L = n(22530);
            async function U(t, e = {}) {
                let n = await (0, L.e)(t, e);
                return n.extend(K), n.extend(K)
            }
            var j = n(35526),
                z = n(78572),
                O = n(53319),
                Q = n(66997),
                Z = n(66991),
                G = n(72585);

            function M(t = {}) {
                let {
                    query: e = {},
                    ...n
                } = t, r = (0, G.Z)(n), s = (0, a.NL)(), {
                    address: c,
                    connector: i,
                    status: o
                } = (0, Q.m)({
                    config: r
                }), u = (0, Z.x)({
                    config: r
                }), {
                    queryKey: d,
                    ...l
                } = function(t, e = {}) {
                    return {
                        gcTime: 0,
                        async queryFn({
                            queryKey: n
                        }) {
                            let {
                                connector: a
                            } = e, {
                                connectorUid: r,
                                scopeKey: s,
                                ...c
                            } = n[1];
                            return U(t, { ...c,
                                connector: a
                            })
                        },
                        queryKey: function(t = {}) {
                            let {
                                connector: e,
                                ...n
                            } = t;
                            return ["walletClient", { ...(0, j.OP)(n),
                                connectorUid: e ? .uid
                            }]
                        }(e)
                    }
                }(r, { ...t,
                    chainId: t.chainId ? ? u,
                    connector: t.connector ? ? i
                }), h = !!("disconnected" !== o && (e.enabled ? ? !0)), w = (0, z.useRef)(c);
                return (0, z.useEffect)(() => {
                    let t = w.current;
                    !c && t ? (s.removeQueries({
                        queryKey: d
                    }), w.current = void 0) : c !== t && (s.invalidateQueries({
                        queryKey: d
                    }), w.current = c)
                }, [c, s]), (0, O.aM)({ ...e,
                    ...l,
                    queryKey: d,
                    enabled: h,
                    staleTime: Number.POSITIVE_INFINITY
                })
            }
        }
    }
]);