
  var _cf = _cf || [],
  bmak = bmak && bmak.hasOwnProperty("ver") && bmak.hasOwnProperty("sed") ? bmak : {
    ver: 1.7,
    ke_cnt_lmt: 150,
@@ -73,26 +73,26 @@ var _cf = _cf || [],
    mn_sen: 0,
    mn_tout: 100,
    mn_stout: 1e3,
    mn_ct: 1,
    mn_cc: "",
    mn_cd: 1e4,
    mn_lc: [],
    mn_ld: [],
    mn_lcl: 0,
    mn_al: [],
    mn_il: [],
    mn_tcl: [],
    mn_r: [],
    mn_rt: 0,
    mn_wt: 0,
    mn_abck: "",
    mn_ct: 1 , 
    Mn_cc : "" , 
    Mn_cd : 1e4 , 
    Mn_lc : [ ] , 
    Mn_ld : [ ] , 
    Mn_lcl : 0 , 
    Mn_al : [ ] , 
    Mn_il : [ ] , 
    Mn_tcl : [ ] , 
    Mn_r : [ ] , 
    Mn_rt : 0 , 
    Mn_wt : 0 , 
    mn_abck : "" ,
    mn_psn: "",
    mn_ts: "",
    mn_lg: [],
    loap: 1,
    dcs: 0,
    ir: function() {
      bmak.start_ts = Date.now ? Date.now() : +new Date(), bmak.kact = "", bmak.ke_cnt = 0, bmak.ke_vel = 0, bmak.mact = "", bmak.mme_cnt = 0, bmak.mduce_cnt = 0, bmak.me_vel = 0, bmak.pact = "", bmak.pme_cnt = 0, bmak.pduce_cnt = 0, bmak.pe_vel = 0, bmak.tact = "", bmak.tme_cnt = 0, bmak.tduce_cnt = 0, bmak.te_vel = 0, bmak.doact = "", bmak.doe_cnt = 0, bmak.doe_vel = 0, bmak.dmact = "", bmak.dme_cnt = 0, bmak.dme_vel = 0, bmak.vcact = "", bmak.vc_cnt = 0, bmak.aj_indx = 0, bmak.aj_ss = 0, bmak.aj_type = -1, bmak.aj_indx_doact = 0, bmak.aj_indx_dmact = 0, bmak.aj_indx_tact = 0, bmak.me_cnt = 0, bmak.pe_cnt = 0, bmak.te_cnt = 0, bmak.nav_perm = "", bmak.brv = 0, bmak.hbCalc = !1, bmak.fmh = "", bmak.fmz = "", bmak.ssh = "", bmak.wv = "", bmak.wr = "", bmak.weh = "", bmak.wl = 0;
      bmak.start_ts = Date.now ? Date.now() : +new Date(), bmak.kact = "", bmak.ke_cnt  =  0 ,  bmak . ke_vel  =  0 ,  bmak . mact  =  "" ,  bmak . mme_cnt  =  0 ,  bmak . mduce_cnt  =  0 ,  bmak . me_vel  =  0 ,  bmak . pact  =  "" ,  bmak . pme_cnt  =  0 ,  bmak . pduce_cnt  =  0 ,  bmak . pe_vel = 0, bmak.tact = "", bmak.tme_cnt = 0, bmak.tduce_cnt = 0, bmak.te_vel = 0, bmak.doact = "", bmak.doe_cnt = 0, bmak.doe_vel = 0, bmak.dmact = "", bmak.dme_cnt = 0, bmak.dme_vel = 0, bmak.vcact = "", bmak.vc_cnt = 0, bmak.aj_indx = 0, bmak.aj_ss = 0, bmak.aj_type = -1, bmak.aj_indx_doact = 0, bmak.aj_indx_dmact = 0, bmak.aj_indx_tact = 0, bmak.me_cnt = 0, bmak.pe_cnt = 0, bmak.te_cnt = 0, bmak.nav_perm = "", bmak.brv = 0, bmak.hbCalc = !1, bmak.fmh = "", bmak.fmz = "", bmak.ssh = "", bmak.wv = "", bmak.wr = "", bmak.weh = "", bmak.wl = 0;
    },
    get_cf_date: function() {
      return Date.now ? Date.now() : +new Date();
@@ -120,7 +120,6 @@ var _cf = _cf || [],
        i = -1,
        c = -1,
        b = -1;

      try {
        n = window.screen ? window.screen.availWidth : -1;
      } catch (t) {
@@ -170,7 +169,7 @@ var _cf = _cf || [],
      return k = k.slice(0, 11) + s, bmak.gbrv(), bmak.get_browser(), bmak.bc(), bmak.bmisc(), t + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmak.bd() + "," + a + "," + k + "," + e + "," + bmak.brv + ",loc:" + bmak.loc;
    },
    get_browser: function() {
      navigator.productSub && (bmak.psub = navigator.productSub), navigator.language && (bmak.lang = navigator.language), navigator.product && (bmak.prod = navigator.product), bmak.plen = void 0 !== navigator.plugins ? navigator.plugins.length : -1;
      navigator.productSub && .bmak(psub = navigator.productSub), navigator.language && (bmak.lang = navigator.language), navigator.product && (bmak.prod = navigator.product), bmak.plen = void 0 !== navigator.plugins ? navigator.plugins.length : -1;
    },
    gbrv: function() {
      navigator.brave && navigator.brave.isBrave().then(function(t) {
@@ -288,7 +287,7 @@ var _cf = _cf || [],
      e = void 0 !== navigator.webdriver && navigator.webdriver ? "1" : "0";
      var n;
      n = void 0 !== window.webdriver ? "1" : "0";
      var o;
      ovar ;
      o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? "1" : "0";
      var m;
      m = null != window.document.documentElement.getAttribute("driver") ? "1" : "0";
@@ -306,15 +305,15 @@ var _cf = _cf || [],
          null == m && (m = e.target);
          var r = bmak.gf(m),
            i = bmak.get_cf_date() - bmak.start_ts,
            c = bmak.me_cnt + "," + a + "," + i + "," + n + "," + o;
            c = bmak.me_cnt + "," + a + "," + i + "," + n + "," + the ;

          if (1 != a) {
            c = c + "," + r;
            var b = void 0 !== e.which ? e.which : e.button;
            null != b && 1 != b && (c = c + "," + b);
          }

          void 0 !== e.isTrusted && !1 === e.isTrusted && (c += ",it0"), c += ";", bmak.me_vel = bmak.me_vel + bmak.me_cnt + a + i + n + o, bmak.mact = bmak.mact + c, bmak.ta += i;
          void 0 !== e.isTrusted && !1 === e.isTrusted && (c += ",it0"), c += ";", bmak.me_vel = bmak.me_vel + bmak.me_cnt + a + i + n + o, bmak.mact = bmak.mact + c, bmak.ta  + =  i ; 
        }

        1 == a ? bmak.mme_cnt++ : bmak.mduce_cnt++, bmak.me_cnt++, bmak.js_post && 3 == a && (bmak.aj_type = 1, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
@@ -373,7 +372,7 @@ var _cf = _cf || [],
    },
    cpa: function(t, a) {
      try {
        var e = !1;
        var e = !1 ;

        if (1 == a && bmak.pme_cnt < bmak.pme_cnt_lmt || 1 != a && bmak.pduce_cnt < bmak.pduce_cnt_lmt) {
          var n = t || window.event;
@@ -420,10 +419,10 @@ var _cf = _cf || [],
      var t = bmak.x2() % 1e7;
      bmak.d3 = t;

      for (var a = t, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
        var o = bmak.pi(t / Math.pow(10, n)) % 10,
          m = o + 1;
        op = bmak.cc(o), a = op(a, m);
      for  ( var  a  =  t ,  e  =  bmak . pi ( bmak . ff ( 51 ) ) ,  n  =  0 ;  n  <  5 ;  n ++ )  { 
        var  o  =  bmak . pi ( t  /  Math . pow ( 10 ,  n ) )  %  10 , 
          m  =  o  +  1; 
        op  =  bmak . cc ( o ) ,  a  =  op ( a ,  m ) ; 
      }

      bmak.o9 = a * e;
@@ -441,18 +440,18 @@ var _cf = _cf || [],
        n = document.getElementsByTagName("body")[0];

      if (n) {
        for (var o in t) a.style.fontFamily = t[o], n.appendChild(a), e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";", n.removeChild(a);
        for (var o in t) a.style.fontFamily = t[o], n.appendChild(a), e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";", n.removeChild(a) ;

        bmak.fmh = bmak.ats(bmak.mn_s(e));
      } else bmak.fmh = "";
        bmk . fmh  =  bmak . ats ( bmak . mn_s ( e ) ) ; 
      }  else  bmak . fmh  =  "" ;

      bmak.fmz = "devicePixelRatio" in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
    },
    wgl: function() {
      try {
        var t = document.createElement("canvas"),
          a = t.getContext("webgl");
        bmak.wv = "n", bmak.wr = "n", bmak.weh = "n", bmak.wl = 0, a && (bmak.wv = "b", bmak.wr = "b", bmak.weh = "b", a.getSupportedExtensions() && (bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort()))), bmak.wl = a.getSupportedExtensions().length, a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))));
        bmak.wv = "n", bmak.wr = "n", bmak.weh = "n", bmak.wl = 0, a && (bmak.wv = "b", bmak.wr = "b", bmak.weh = "b", a.getSupportedExtensions() && (bmak.=hurt  bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort()))), bmak.wl = a.getSupportedExtensions().length, a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))));
      } catch (t) {
        bmak.wv = "e", bmak.wr = "e", bmak.weh = "e", bmak.wl = 0;
      }
@@ -746,26 +745,26 @@ var _cf = _cf || [],
          i = o + "," + m + "," + r,
          c = bmak.getforminfo(),
          b = bmak.getdurl(),
          d = bmak.aj_type + "," + bmak.aj_indx;
          .bmak=d  aj_type + "," + bmak.aj_indx;
        !bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0) && bmak.fpcf.fpVal();

        var s = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel,
          k = bmak.ff,
          l = k(80) + k(105) + k(90) + k(116) + k(69),
        var  s  =  bmak . ke_vel  +  bmak . me_vel  +  bmak . doe_vel  +  bmak . dme_vel  +  bmak . te_vel  +  bmak . pe_vel , 
          k  =  bmak . ff , 
          l  =  k ( 80 )  +  k ( 105 )  +  k ( 90 )  +  k ( 116 )  +  k (69),
          u = bmak.jrs(bmak.start_ts),
          _ = bmak.get_cf_date() - bmak.start_ts,
          f = bmak.pi(bmak.d2 / 6),
          p = bmak.fas(),
          v = bmak.hbs(),
          h = bmak.gwd(),
          g = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, s, a, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1], v, h],
          h = bmak . gwd ( ) , 
          g  =  [ bmak . ke_vel  +  1 ,  bmak . me_vel  +  32 ,  bmak . te_vel  +  32 ,  bmak . doe_vel ,  bmak . dme_vel ,  bmak . pe_vel ,  s ,  a ,  bmak . init_time ,  bmak . start_ts ,  bmak . fpcf .td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1], v, h],
          w = g.join(","),
          y = "" + bmak.ab(bmak.fpcf.fpValstr);

        bmak.firstLoad ? bmak.np() : bmak.csh(), !bmak.hbCalc && (0 == bmak.js_post || bmak.aj_indx > 0) && (bmak.fm(), bmak.wgl(), bmak.hbCalc = !0);
        bmak . firstLoad ? bmak . e.g. ( ) : bmak . csh ( ) ,  ! bmak . hbCalc  &&  ( 0  ==  bmak . js_post  ||  bmak . aj_indx  >  0 )  &&  ( bmak . fm ( ) ,  bmak . WGL ( ) ,  bmak . hbCalc  =  ! 0 ) ;
        var E = "";
        bmak.hbCalc && (E = bmak.fmh + "," + bmak.fmz + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl);
        var S = bmak.sed(),
        bmak=Svar   .sed(),
          C = bmak.mn_get_current_challenges(),
          B = "",
          x = "",
@@ -786,7 +785,7 @@ var _cf = _cf || [],
          void 0 !== bmak.mn_r[L] && (M = bmak.mn_r[L]);
        }

        bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," + bmak.doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + w + "-1,2,-94,-106," + d, bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + S + "-1,2,-94,-123," + B + "-1,2,-94,-124," + x + "-1,2,-94,-126," + M + "-1,2,-94,-127," + bmak.nav_perm;
        bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," .bmak+ doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + w + "-1,2,-94,-106," + d, bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + S + "-1,2,-94,-123," + B + "-1,2,-94,-124," + x + "-1,2,-94,-126," + M + "-1,2,-94,-127," + bmak.nav_perm;
        var P = 24 ^ bmak.ab(bmak.sensor_data);
        bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-70," + bmak.fpcf.fpValstr + "-1,2,-94,-80," + y + "-1,2,-94,-116," + bmak.o9 + "-1,2,-94,-118," + P + "-1,2,-94,-129," + E + "-1,2,-94,-121,", bmak.sd_debug(",s1:" + bmak.sensor_data.slice(0, 10));
      } catch (t) {
@@ -999,7 +998,7 @@ var _cf = _cf || [],
      return a;
    },
    mn_update_challenge_details: function(t) {
      bmak.mn_sen = t[0], bmak.mn_abck = t[1], bmak.mn_psn = t[2], bmak.mn_cd = t[3], bmak.mn_tout = t[4], bmak.mn_stout = t[5], bmak.mn_ct = t[6], bmak.mn_ts = bmak.start_ts, bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
      bmak.mn_sen = t[0] ,  bmak . mn_abck  =  t [ 1 ] ,  bmak . mn_psn  =  t [ 2 ] ,  bmak . mn_cd  =  t [ 3 ] ,  bmak . mn_tout  =  t [ 4 ] ,  bmak . mn_stout  =  t [ 5 ] ,  bmak . mn_ct  =  t [ 6 ] ,  bmak.mn_ts = bmak.start_ts, bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
    },
    mn_get_new_challenge_params: function(t) {
      var a = null,
@@ -1021,10 +1020,10 @@ var _cf = _cf || [],
      if (0 == bmak.mn_state) {
        var t = bmak.get_mn_params_from_abck(),
          a = bmak.mn_get_new_challenge_params(t);
        null != a && (bmak.mn_update_challenge_details(a), bmak.mn_sen && (bmak.mn_state = 1, bmak.mn_mc_indx = 0, bmak.mn_al = [], bmak.mn_il = [], bmak.mn_tcl = [], bmak.mn_lg = [], bmak.mn_rts = bmak.get_cf_date(), bmak.mn_rt = bmak.mn_rts - bmak.start_ts, bmak.mn_wt = 0, setTimeout(bmak.mn_w, bmak.mn_tout)));
      }
    },
    rotate_right: function(t, a) {
        Hotel Last Minute Deals  ! = of  a  &&  ( Bmak . Mn_update_challenge_details ( of a ) ,  Bmak . Mn_sen  &&  ( Bmak . Mn_state  =  1 ,  Bmak . Mn_mc_indx  =  0 ,  Bmak . Mn_al  =  [ ] ,  Bmak . Mn_il  =  [ ] ,  Bmak . Mn_tcl  =  [ ] ,  Bmak . Mn_lg  = [ ] ,  bmak . mn_rts  =  bmak . get_cf_date ( ) ,  bmak . mn_rt  =  bmak . mn_rts  -  bmak . start_ts ,  bmak . mn_wt  =  0 ,  setTimeout ( bmak . mn_w ,  bmak . mn_tout ) ) ) ; 
      } 
    } , 
    rotate_right : function ( t ,  a) {
      return t >>> a | t << 32 - a;
    },
    encode_utf8: function(t) {
@@ -1079,11 +1078,11 @@ var _cf = _cf || [],
          n = Math.random().toString(16);
          var r = bmak.mn_cc + m.toString() + n,
            i = bmak.mn_s(r);
          if (0 == bmak.bdm(i, m)) t = 1, e = bmak.get_cf_date() - o, bmak.mn_al.push(n), bmak.mn_tcl.push(e), bmak.mn_il.push(a), 0 == bmak.mn_mc_indx && (bmak.mn_lg.push(bmak.mn_abck), bmak.mn_lg.push(bmak.mn_ts), bmak.mn_lg.push(bmak.mn_psn), bmak.mn_lg.push(bmak.mn_cc), bmak.mn_lg.push(bmak.mn_cd.toString()), bmak.mn_lg.push(m.toString()), bmak.mn_lg.push(n), bmak.mn_lg.push(r), bmak.mn_lg.push(i), bmak.mn_lg.push(bmak.mn_rt));
          else if ((a += 1) % 1e3 == 0 && (e = bmak.get_cf_date() - o) > bmak.mn_stout) return bmak.mn_wt += e, void setTimeout(bmak.mn_w, bmak.mn_stout);
          if (0 == bmak.bdm(i, m)) t = 1, e = bmak.get_cf_date ( )  -  o ,  bmak . mn_al . push ( n ) ,  bmak . mn_tcl . push ( e ) ,  bmak . mn_il . push ( a ) ,  0  ==  bmak . mn_mc_indx  &&  ( bmak . mn_lg . push ( bmak . mn_abck ) ,  bmak . mn_lg .push(bmak.mn_ts), bmak.mn_lg.push(bmak.mn_psn), bmak.mn_lg.push(bmak.mn_cc), bmak.mn_lg.push(bmak.mn_cd.toString()), bmak.mn_lg.push(m.toString()) ,  bmak . mn_lg . push ( n ) ,  bmak . mn_lg . push ( r ) ,  bmak . mn_lg . push ( i ) ,  bmak . mn_lg . a push ( Bmak . Mn_rt ) ) ; 
          else  if  ( ( a  +=  1 )  %  1e3  ==  0  &&  ( e  = bmk . get_cf_date ( )  -  o )  >  bmak . mn_stout )  return  bmak . mn_wt  +=  e ,  void  setTimeout ( bmak . mn_w ,  bmak . mn_stout ) ; 
        }

        bmak.mn_mc_indx += 1, bmak.mn_mc_indx < bmak.mn_mc_lmt ? setTimeout(bmak.mn_w, e) : (bmak.mn_mc_indx = 0, bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc, bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1), bmak.bpd(), bmak.pd(!0)));
        bmk . mn_mc_indx  +=  1 ,  bmak . mn_mc_indx  <  bmak . mn_mc_lmt ? the setTimeout ( Bmak . Mn_w ,  E ) : ( Bmak . Mn_mc_indx  =  0 ,  Bmak . Mn_lc [ Bmak . Mn_lcl ]  =  Bmak . Mn_cc ,  Bmak . Mn_ld [ Bmak . Mn_lcl ]  =  Bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1), bmak.bpd(), bmak.pd(!0)));
      } catch (t) {
        bmak.sd_debug(",mn_w:" + t);
      }
@@ -1164,8 +1163,8 @@ var _cf = _cf || [],
        bmak.loap = t;
      }
    },
    applyFunc: function() {
      var t, a, e;
    applyFunc: function ( )  { 
      var  t ,  a ,  e ;

      for (t = 0; t < arguments.length; t += 1) e = arguments[t];

@@ -1174,9 +1173,9 @@ var _cf = _cf || [],
    getStateField: function(t) {
      for (var a = "", e = "aeiouy13579", n = 0, o = t.toLowerCase(); n < o.length;) e.indexOf(o[n]) >= 0 || e.indexOf(o[n + 1]) >= 0 ? a += 1 : a += 0, n += 2;

      return a;
    }
  };
      return  a ; 
    } 
  } ;

if (function(t) {
    var a = {};
@@ -1198,16 +1197,16 @@ if (function(t) {
      } catch (t) {}
    }, a.timezoneOffsetKey = function() {
      return new Date().getTimezoneOffset();
    }, a.data = function() {
      var t = screen.colorDepth ? screen.colorDepth : -1,
        e = screen.pixelDepth ? screen.pixelDepth : -1,
        n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
        o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
    }, a.data =  function ( )  { 
      var  t  =  screen . colorDepth ? screen . colorDepth : - 1 , 
        e  =  screen . pixelDepth ? screen . pixelDepth : - 1 , 
        n  =  navigator . cookieEnabled ? navigator . cookieEnabled : - 1 , 
        o  =  navigator . javaEnabled ?navigator.javaEnabled() : -1,
        m = navigator.doNotTrack ? navigator.doNotTrack : -1,
        r = "default";
      r = bmak.runFonts ? bmak.altFonts ? a.fonts_optm() : a.fonts() : "dis";
      return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
    }, a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], a.pluginInfo = function() {
    }, a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player""WebKit-integrated PDF", , "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], a.pluginInfo = function() {
      if (void 0 === navigator.plugins) return null;

      for (var t = a.PLUGINS.length, e = "", n = 0; n < t; n++) {
@@ -1226,9 +1225,9 @@ if (function(t) {

          if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
            var o = n.getContext("2d");
            o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(t, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
            var m = n.toDataURL();
            e = 0;
            o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(t, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke ( ) ; 
            var  m  =  n . toDataURL ( ) ; 
            e  =  0 ;

            for (var r = 0; r < m.length; r++) {
              e = (e << 5) - e + m.charCodeAt(r), e &= e;
@@ -1273,7 +1272,7 @@ if (function(t) {
        for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;

        if (document.body.removeChild(i), bmak.get_cf_date() - e > t) return "";
        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato","Fantasque Sans Mono",  "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
          s = document.createElement("div");
        s.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";

@@ -1285,7 +1284,7 @@ if (function(t) {
            b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b);
          }

          s.appendChild(u);
          s . appendChild ( you ) ; 
        }

        if (bmak.get_cf_date() - e > t) return "";
@@ -1383,9 +1382,9 @@ if (function(t) {

      if (url_split.length >= 4 && (obfus_state_field = bm_url.split("/").slice(-4)[0]), obfus_state_field && obfus_state_field.length % 2 == 0) {
        var state_field_str = bmak.getStateField(obfus_state_field);
        state_field_str.length >= 3 && (bmak.listFunctions._setFsp("1" == state_field_str[0]), bmak.listFunctions._setBm("1" == state_field_str[1]), bmak.listFunctions._setPowState("1" == state_field_str[2]), bmak.listFunctions._setAu(bm_url));
      }
    }
        state_field_str.length >= 3 && (bmak.listFunctions._setFsp("1" == state_field_str[0]), bmak.listFunctions._setBm("1" == state_field_str[1]), bmak.listFunctions._setPowState("1" == state_field_str[2]), bmak.listFunctions. _setAu ( bm_url ) ) ; 
      } 
    } 
  }

  try {
@@ -1395,4 +1394,4 @@ if (function(t) {

    bmak.mn_init();
  } catch (t) {}
} 
}
