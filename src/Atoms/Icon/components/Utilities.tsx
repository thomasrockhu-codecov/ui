import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Utilities = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M9.99924706 14.5866944v.9411765H5.29336471v-.9411765h4.70588235zM7.88111101.00027963l.26978617.01494367.20141076.019826.20594922.02809857.20117885.03569818.19968664.04316955.19659849.05019915.26334265.079098.37903676.13889633.24956315.10825798.2462841.12081148.1824259.09801447.1157868.06712223.2363732.1473516.1675136.11392655.2239265.16566797.109259.08644348.1070517.08913584.2552097.22973395.1487043.14724919.0954713.09966026.1862226.20871768.1350289.16448673.0803065.10428229.1284864.17627122.1537953.23196518.1425169.23987977.1322923.2491246.1236253.26281081.108547.26644592.0488198.13463177.0673083.20587493.0586528.20815674.0523565.2170483.0292751.14292714.0373922.21718808.0289019.22425404.0244288.30145115.007194.22475272v.1914966l-.0026963.11374496-.0106892.21671239-.0168551.20749566-.0107319.1048953-.0264385.2036606-.051315.29460861-.0396707.18540724-.0459301.18249618-.0503289.17839387-.0555289.17350264-.0898221.24762979-.0979413.23538621-.1066243.23099409-.0725442.14482865-.1153485.21254298-.0783879.13580439-.1214764.1996121-.2015672.30722548-.1635401.23662799-.4629873.64661002-.1361748.198672-.0333033.0576538-.0370404.0835058-.0517692.1586283-.0449563.1850637-.0209499.1070915-.0430167.2808642-.020527.1767938-.0216996.2444819-.0217328.3606652-.0124861.4452037.0006774.4301881.0196157.6972947H4.24381356l.01446655-.4846294.00656695-.3579118-.00291892-.3866994-.01581613-.456325-.01579968-.2422662-.0351218-.3643014-.0489077-.334497-.04427794-.2092321-.04425741-.1629708-.02400414-.0697795-.04954359-.1130056-.08996094-.1383238-.62125686-.87420271-.16431692-.24308403-.16118088-.252556-.19747042-.33830679-.03748234-.06942637-.1128747-.22202965-.07005849-.14927543-.06789495-.15469273-.06577941-.16292717-.0887687-.24596237-.05618435-.17699847-.04820592-.17178371-.04652397-.18605591-.03971241-.18701752-.03478496-.1924102-.02945028-.20064884-.02273283-.20657987-.02231986-.31499406L2 5.84504736l.00016994-.18883388.00428822-.15293917.00840889-.15144729.01997365-.22495351.01792243-.14571356.04913573-.29507552.06311163-.28509977.07867019-.28412985.06749889-.20505124.0745961-.19992829.08400241-.20182584.0899294-.19409258.12948969-.25029932.0677086-.11944188.11296287-.18720241.1541862-.23163092.12562201-.17161685.16986608-.2137696.13829906-.16053126.19163717-.20451457.09870279-.09849833.09828418-.09340352.20926578-.18592572.10700019-.0887023.21461357-.16563212.28341136-.19727146.17571774-.1107249.18090545-.1055827.23844367-.12625852.18724036-.09007326.25239735-.10896779L5.8160526.3585l.25768439-.0911468.26193448-.07803806L6.5337739.1391711l.19860762-.04249174.20044264-.03516304.26817009-.0344257.20208219-.01721792L7.61120272 0l.26990829.00027963zm-.08468476.94007392h-.11200544l-.10629255.00248786-.22364016.01484505-.16739762.0183277-.22234259.03481297-.21475465.04426376-.16481328.04165968-.21552793.06396083-.32571618.11860954-.21274269.09202437-.1044994.04979894-.2528612.13193982-.24986018.1496823-.23988276.16263441-.23104506.17634794-.0877972.07269604-.17778306.15785096-.08411993.07981366-.16574521.16894244-.15561268.17377644-.11042985.13367798-.17671303.23596414-.16471586.25125021-.11817528.20329865-.10870453.21016187-.07415103.16007361-.04736669.11192943-.08439585.22186346-.07358199.22968402-.06202077.23581752-.03779282.17602077-.03187838.18337663-.02380399.18233419-.01647927.18552791-.0070059.12564907-.00359477.12740141.00179473.25844677.00888719.18686408.01476848.18403375.03059431.25765586.04261902.24720867.05170081.23389595.06177663.22603654.04536526.14273266.07582492.21015844.05337798.13220547.118527.26127306.06298522.12623018.06343043.11913719.10424495.18305661.10440595.17234084.11369726.17538266.15097269.22331625.5471413.76754352.15446048.22598677.03642564.0580894.02942617.0531171.05361376.1101791.04510837.1103018.04081588.117298.03390911.1140973.04469607.1811254.0399859.1953312.05034808.330524.02314354.2011827.03285263.3984614.01406791.2598268.01311391.4733845.00057724.193176h5.06823531l.0062682-.4262782.0085966-.2456853.0141759-.2596259.0204651-.2652593.0276612-.2666886.0365964-.2669079.048467-.2649708.0431902-.1848902.0535504-.1833078.0422547-.1184557.0480441-.1141729.0530005-.1056215.0349198-.0603483.1025075-.15370436.4646363-.65221355.2289601-.32735211.1847784-.2813681.0739836-.1213201.1366401-.23609076.1267253-.2446381.0609533-.1293128.0585991-.1329308.0531853-.13071989.1004527-.28378361.0647884-.22227184.0372112-.14700735.0501743-.24433553.0275044-.16476687.0311527-.25866027.0147606-.18051569.0092506-.18735705.0029256-.19325635-.0065585-.25447461-.0145246-.19136857-.0207922-.18308714-.0397113-.2410186-.0528413-.24045317-.0628828-.22937603-.0972937-.28539609-.0684956-.16997734-.0954806-.21154214-.1386839-.26476682-.1183288-.19969958-.1027123-.15555228-.0973959-.13845819-.1844764-.23494863-.1131833-.13160992-.1592334-.17045014-.0847615-.08485398-.1255241-.11829777-.2206497-.1901772-.1889629-.14608553-.2376239-.16564618-.1965787-.12248187-.2029026-.11365654-.25227934-.12586826-.16368518-.07197994-.15808214-.06273796-.26638102-.09274677-.32752121-.08999493-.11579814-.02518083-.16550351-.03131358-.10685685-.01714446-.22215963-.02603686-.16812521-.01240648-.16803372-.00549963zM5.76297749 2.473161l.40403694.85003959c-.81628053.38799073-1.33473531 1.1251674-1.55913886 2.25737717l-.04096115.23172264-.92988841-.14532961c.22924352-1.46680976.87544003-2.51444263 1.93473048-3.09602503l.191221-.09778476z"
      />
    </IconBase>
  );
};

Utilities.displayName = 'Icon.Utilities';
