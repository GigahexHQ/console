import React, { PureComponent } from "react";
import "./Icon.scss";
import { statusColor, Color } from "./Colors";

export default class SparkIcon extends PureComponent<{ color?: Color }> {
  render() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='190.672'
        height='103.487'
        version='1.1'
        viewBox='0 0 50.449 27.381'
        style={{ height: 32, width: 32 }}>
        <g fill='#a5aec0' fillOpacity='1' fillRule='evenodd' stroke='none' strokeWidth='0.129'>
          <path
            d='M111.699 145.125c-.01.015-.042.028-.074.028a.508.508 0 00-.163.054.567.567 0 01-.138.054c-.018 0-.032.013-.032.028a.028.028 0 01-.028.028c-.144 0-.616.573-.672.817a.351.351 0 01-.046.112c-.018.024-.03.186-.03.438 0 .414.007.446.14.705.101.197.397.45.573.49.042.009.1.03.13.044.064.033.504.016.655-.025.21-.056.249-.09.25-.22 0-.065.01-.14.022-.165a.897.897 0 00.035-.217c.012-.189-.004-.205-.132-.132-.273.155-.597.192-.753.085-.111-.076-.223-.199-.223-.245 0-.022-.015-.044-.033-.05-.064-.023-.043-.534.028-.685a1.42 1.42 0 01.324-.394c.234-.185.702-.182.883.007.107.113.163-.01.163-.365 0-.063.012-.122.027-.131.097-.063-.045-.233-.195-.233-.037 0-.068-.012-.068-.028s-.122-.027-.314-.027c-.18 0-.32.012-.33.027m-9.927.11c-.009.045-.027.082-.039.082-.011 0-.029.034-.039.075-.01.042-.027.082-.038.09-.021.014-.034.038-.199.374-.058.118-.11.22-.118.228a1.58 1.58 0 00-.079.15 1.023 1.023 0 01-.082.152.25.25 0 00-.036.08.307.307 0 01-.056.105.133.133 0 00-.036.077c0 .021-.01.039-.023.039s-.032.034-.042.075a.239.239 0 01-.035.09c-.017.012-.127.224-.305.588a1.29 1.29 0 01-.099.179.234.234 0 00-.035.089c-.01.04-.029.075-.042.075-.013 0-.023.024-.023.054 0 .052.017.055.322.055.382 0 .343.023.503-.308l.13-.267h.824l.017.086c.009.047.016.126.016.176 0 .05.012.099.026.108.015.009.026.06.026.111v.094h.664l-.019-.089c-.026-.13-.118-.64-.146-.815a29.193 29.193 0 00-.078-.452l-.08-.452a30.73 30.73 0 00-.078-.452l-.07-.39-.016-.09h-.698l-.017.083m2.837.135c-.01.122-.029.228-.04.235a.76.76 0 00-.04.226c-.01.117-.026.224-.035.24-.017.027-.06.29-.114.684a.963.963 0 01-.048.233.918.918 0 00-.038.233c-.01.12-.028.232-.04.247a.943.943 0 00-.04.227l-.018.2.296-.009.297-.008.031-.164c.032-.167.111-.64.124-.74.006-.05.031-.056.337-.068.182-.008.347-.028.367-.045a.322.322 0 01.105-.047c.547-.136.71-1.402.2-1.568a.166.166 0 01-.076-.05c-.013-.02-.219-.033-.634-.039l-.616-.009-.018.222m3.545-.005a3.272 3.272 0 01-.118.226c-.007.007-.06.112-.118.232-.058.121-.111.226-.119.233-.015.016-.139.258-.28.548a2.106 2.106 0 01-.117.22.226.226 0 00-.034.075c-.01.033-.029.061-.041.061s-.03.037-.04.082c-.01.046-.027.083-.04.083-.011 0-.03.037-.039.082-.01.045-.028.082-.041.082-.013 0-.024.018-.024.04a.134.134 0 01-.036.076.304.304 0 00-.056.104.25.25 0 01-.036.081 1.121 1.121 0 00-.135.273c0 .019.123.029.35.029h.35l.064-.144c.034-.08.07-.15.08-.158a.258.258 0 00.036-.082c.058-.192.057-.192.513-.192h.414l.018.199c.01.11.031.239.047.288l.03.089h.624l-.007-.117a.6.6 0 00-.027-.157 1.298 1.298 0 01-.046-.22c-.025-.168-.066-.409-.148-.876a159.874 159.874 0 01-.213-1.253l-.017-.117h-.689l-.105.213m5.946-.2l-.008.035a4.535 4.535 0 00-.027.213 1.215 1.215 0 01-.037.219c-.02.033-.016.013-.041.246a.934.934 0 01-.042.22c-.01.015-.028.12-.039.232a.95.95 0 01-.04.233.101.101 0 00-.021.048c-.001.085-.04.396-.053.418-.02.033-.016.013-.042.246a1.245 1.245 0 01-.037.22c-.017.03-.02.046-.045.254l-.017.144.311-.008.312-.008.026-.219c.015-.12.034-.231.044-.246.009-.015.025-.114.035-.22.01-.105.031-.231.047-.28l.03-.09H115.493l-.015.13c-.008.072-.026.162-.039.2a1.94 1.94 0 00-.05.26c-.013.105-.035.25-.048.321-.03.167-.046.158.3.158h.295l.017-.158c.009-.086.026-.183.039-.216.012-.032.031-.146.041-.253.01-.107.028-.195.038-.195.011 0 .028-.105.039-.233.01-.128.028-.238.04-.246.011-.008.029-.112.04-.233a.826.826 0 01.038-.233.78.78 0 00.04-.226c.01-.116.026-.224.035-.24.023-.036.076-.477.06-.493a1.807 1.807 0 00-.29-.013h-.28l-.03.116a3.378 3.378 0 00-.06.308l-.06.411-.033.22-.534.006-.534.008.015-.103c.008-.057.032-.202.053-.322.085-.485.095-.55.095-.596 0-.046-.596-.08-.607-.035m3.824.144a1.756 1.756 0 01-.052.295c-.007.069-.046.32-.079.506-.04.23-.093.541-.158.932-.024.143-.06.345-.08.448-.02.104-.038.236-.038.295v.106h1.491l.03-.212.046-.302.015-.089h-.872l.002-.089c0-.049.01-.15.02-.226l.017-.137.42-.013.42-.014.01-.096a.347.347 0 01.029-.123.757.757 0 00.038-.199l.018-.171h-.814l.016-.144c.009-.079.026-.148.038-.153.012-.005.022-.045.022-.089v-.08h.446c.413 0 .447-.003.447-.05 0-.026.011-.06.025-.074a.877.877 0 00.043-.253l.018-.225h-1.5l-.018.157m-12.335.501c.097.095.042.398-.079.43-.026.008-.047.025-.047.038 0 .013-.09.024-.198.024h-.197l.015-.116c.008-.064.022-.148.03-.185a.89.89 0 00.03-.185c.007-.089.356-.094.446-.006m2.96.673l.019.23h-.2c-.11 0-.2-.01-.2-.02 0-.024.163-.37.184-.391a.894.894 0 00.064-.131l.05-.117.032.1c.018.054.041.203.052.329m-6.46-.124c.016.142.038.28.049.306.018.043 0 .048-.208.048-.126 0-.225-.01-.22-.024.053-.144.302-.605.323-.598.015.005.04.126.056.268m-7.08-.119a.509.509 0 00-.17.033.798.798 0 01-.218.042c-.105.01-.19.03-.19.044 0 .014-.027.025-.06.025a.903.903 0 00-.21.055.995.995 0 01-.19.055c-.021 0-.04.012-.04.027s-.02.027-.047.027a.193.193 0 00-.098.04.197.197 0 01-.095.042.14.14 0 00-.082.04.267.267 0 01-.107.058c-.038.01-.07.029-.07.043a.025.025 0 01-.024.024c-.025 0-.411.26-.464.313l-.214.188c-.182.157-.46.464-.637.704l-.112.151c-.056.073-.281.44-.281.46 0 .011-.03.068-.065.127a.806.806 0 00-.082.178c-.009.039-.025.07-.036.07-.018 0-.031.045-.107.357-.016.067-.041.16-.056.205-.04.128-.057.773-.026.986.044.311.087.519.112.547.013.014.023.05.023.078 0 .052.017.097.14.375a3.413 3.413 0 00.425.714c.043.062.129.166.19.231a.835.835 0 01.112.134c0 .008.05.07.111.135.062.067.147.167.19.222.044.056.156.185.25.288.205.224.634.708.777.876.057.067.156.18.221.25a19.658 19.658 0 01.67.801c.016.019.057.077.091.13a.827.827 0 00.082.11c.01.007.055.087.1.179.32.658.07 1.336-.654 1.775-.235.143-.24.145-.342.168-.05.011-.1.035-.11.051-.028.046-.795.043-.839-.003a.116.116 0 00-.07-.034c-.148 0-.766-.485-.766-.6 0-.015-.015-.043-.033-.063-.052-.06-.2-.356-.39-.782-.08-.175-.181-.273-.181-.173 0 .014-.036.033-.08.043-.042.01-.078.03-.078.043 0 .014-.03.032-.066.042-.036.009-.065.027-.065.038 0 .012-.033.03-.072.04a.217.217 0 00-.086.038.846.846 0 01-.144.085 1.024 1.024 0 00-.145.082 1.033 1.033 0 01-.144.084.59.59 0 00-.14.09c-.005.01-.026.02-.047.02-.043 0-.237.104-.293.157a.126.126 0 01-.071.035c-.02 0-.04.009-.044.02-.008.019-.45.266-.647.362-.099.048-.107.168-.025.358.022.052.073.181.112.287.267.72.619 1.234 1.145 1.67.13.109.502.314.693.383.072.026.15.058.174.07a.625.625 0 00.144.041c.056.01.126.028.154.041.18.082 1.282.142 1.55.086.072-.016.208-.04.302-.055.252-.04.437-.079.532-.111l.269-.088c.101-.033.195-.07.209-.083a.106.106 0 01.062-.023c.31 0 1.494-.916 1.842-1.426.066-.097.071-.103.16-.215a.255.255 0 00.051-.09c0-.015.015-.043.033-.064.077-.09.099-.122.099-.147 0-.014.014-.043.032-.062.018-.02.08-.135.138-.256.058-.12.114-.223.125-.228.01-.005.02-.03.02-.055.001-.025.024-.095.052-.155a.567.567 0 00.052-.171c0-.034.012-.062.026-.062.014 0 .033-.062.043-.137.01-.075.027-.137.038-.137s.029-.093.04-.206c.01-.113.028-.212.04-.22.032-.02.03-.932-.001-.992a.991.991 0 01-.042-.232c-.009-.102-.026-.185-.037-.185s-.028-.05-.038-.111a.634.634 0 00-.042-.158 1.944 1.944 0 01-.131-.332c0-.016-.01-.03-.02-.03-.012 0-.036-.033-.055-.074-.06-.14-.095-.2-.115-.2-.012 0-.02-.016-.02-.036a.236.236 0 00-.053-.103 4.024 4.024 0 01-.152-.203 4.441 4.441 0 00-.366-.443 52.191 52.191 0 00-1.268-1.405c-.108-.116-.28-.308-.38-.427a25.577 25.577 0 00-.224-.26 5.363 5.363 0 01-.144-.176 5.079 5.079 0 00-.133-.163c-.103-.112-.353-.481-.367-.543-.01-.041-.029-.075-.042-.075-.03 0-.03-.43.001-.45.014-.01.032-.054.042-.1.021-.1.352-.457.486-.523.296-.149.286-.146.682-.145.31 0 .396.01.46.047a.332.332 0 00.123.047c.024 0 .047.01.052.02a.99.99 0 00.153.123c.24.17.459.435.71.864.13.222.157.233.288.116.13-.115.131-.115.276-.217.072-.05.143-.105.158-.122a1.46 1.46 0 01.157-.123c.072-.052.143-.107.158-.124.014-.016.094-.078.177-.137a.615.615 0 00.151-.13c0-.013.016-.023.036-.023.02 0 .066-.028.103-.062.135-.124.207-.185.219-.185.013 0 .172-.113.194-.138.01-.011.326-.262.362-.287.014-.01-.086-.177-.106-.177-.011 0-.02-.016-.02-.035a.4.4 0 00-.086-.133 2.12 2.12 0 01-.124-.16 1.727 1.727 0 00-.079-.11 1.726 1.726 0 01-.079-.11c-.123-.19-.57-.66-.752-.788l-.178-.13a.582.582 0 00-.164-.096c-.02 0-.035-.01-.035-.024s-.032-.033-.072-.043c-.04-.01-.078-.028-.085-.04a.857.857 0 00-.184-.082 5.287 5.287 0 01-.224-.086 2.955 2.955 0 00-.485-.108c-.143-.023-.823-.027-1.103-.008m33.137.395c-.04.015-.072.039-.072.053 0 .014-.012.025-.027.025a3.83 3.83 0 00-.386.25 6.805 6.805 0 01-.4.265.466.466 0 00-.145.108c-.02.019-.044.034-.052.034a.97.97 0 00-.198.14.208.208 0 01-.072.036c-.033.011-.06.031-.06.045a.026.026 0 01-.026.026 3.82 3.82 0 00-.386.25 7.172 7.172 0 01-.4.265.916.916 0 00-.202.165c-.02.02-.036.072-.036.116 0 .044-.01.08-.024.08-.013 0-.032.142-.042.316-.01.173-.028.321-.04.328-.01.007-.028.15-.038.315-.01.166-.029.308-.04.316-.012.007-.03.145-.04.308-.01.161-.028.307-.04.322a1.47 1.47 0 00-.04.308c-.01.154-.027.28-.038.28-.01 0-.028.142-.038.315-.01.174-.029.322-.04.329-.011.007-.03.15-.04.315-.01.166-.028.308-.039.315-.011.007-.029.14-.04.294a1.94 1.94 0 01-.035.309 2.256 2.256 0 00-.049.315c-.03.279-.07.606-.153 1.26-.022.173-.054.45-.072.616-.017.166-.04.314-.05.33-.01.015-.025.16-.036.321-.01.162-.028.294-.039.294-.01 0-.028.142-.039.315-.01.174-.028.315-.039.315-.01 0-.029.136-.039.302-.01.166-.028.307-.039.315-.011.007-.029.145-.04.308-.01.162-.027.3-.038.308-.01.008-.032.15-.048.315-.064.648-.098.933-.114.959-.01.015-.025.16-.035.322l-.02.294h1.165c.641 0 1.179-.01 1.195-.02.017-.012.038-.141.05-.295a1.5 1.5 0 01.039-.301 1.67 1.67 0 00.04-.322c.01-.163.028-.301.039-.308.011-.007.029-.143.04-.302.01-.158.027-.294.038-.3.011-.008.029-.15.04-.316.01-.166.028-.308.04-.315.011-.008.029-.15.04-.316.01-.166.028-.308.04-.316.013-.008.024-.069.024-.135s.012-.18.026-.252c.015-.072.038-.23.05-.35.013-.121.03-.263.039-.316.008-.052.027-.2.042-.328a9.12 9.12 0 01.039-.302c.006-.037.02-.16.03-.273.015-.164.024-.194.047-.155.016.027.05.075.075.106a.208.208 0 01.045.082c0 .014.015.041.033.061.018.02.05.063.073.097.021.034.06.09.085.124a.242.242 0 01.046.09c0 .016.009.032.02.037.03.014.138.181.138.214 0 .016.011.028.025.028.014 0 .033.031.042.069.01.037.027.068.04.068.013 0 .024.02.024.042 0 .023.017.05.04.058.02.009.038.03.038.05 0 .03.025.067.131.198a.12.12 0 01.027.058c0 .021.021.052.128.185a.33.33 0 01.041.09c.01.032.03.059.043.059.013 0 .024.013.024.028 0 .033.108.2.138.214.011.005.02.02.02.033 0 .03.268.447.295.46.011.005.02.02.02.034 0 .014.095.173.21.352.116.18.21.34.21.354 0 .015.01.031.02.036.03.013.453.677.453.71 0 .013.009.025.02.025.011 0 .044.045.073.1a.84.84 0 00.079.131c.015.016.056.079.09.14.036.06.074.12.086.136.042.054.256.399.256.413 0 .024.114.184.188.264l.07.076h1.42c1.509 0 1.5.001 1.369-.123-.03-.027-.053-.06-.053-.074 0-.013-.023-.05-.052-.082a1.773 1.773 0 01-.125-.17.63.63 0 00-.092-.121c-.011-.005-.02-.025-.02-.044 0-.019-.023-.057-.052-.084-.03-.028-.053-.06-.053-.074 0-.013-.023-.05-.052-.083a1.759 1.759 0 01-.125-.17.644.644 0 00-.092-.12c-.01-.006-.02-.022-.02-.036a.871.871 0 00-.132-.216 3.257 3.257 0 01-.118-.164 1.058 1.058 0 00-.124-.16c-.01-.005-.02-.02-.02-.034 0-.029-.344-.528-.374-.541-.01-.005-.02-.021-.02-.036 0-.014-.088-.15-.197-.301a4.377 4.377 0 01-.197-.287.125.125 0 00-.027-.046 5.873 5.873 0 01-.157-.225 12.512 12.512 0 00-.23-.334 41.907 41.907 0 00-.327-.484 5.703 5.703 0 01-.23-.333 5.732 5.732 0 00-.23-.333 29.718 29.718 0 00-.164-.242 20.07 20.07 0 01-.164-.243 1.098 1.098 0 00-.06-.083.885.885 0 01-.144-.234c0-.016-.009-.029-.02-.029-.01 0-.049-.046-.085-.103a1.87 1.87 0 00-.092-.133 1.097 1.097 0 01-.066-.092 2.911 2.911 0 00-.085-.125.238.238 0 01-.046-.092c0-.017-.009-.03-.02-.03-.01 0-.049-.047-.085-.103a1.06 1.06 0 00-.081-.116c-.093-.08-.076-.13.115-.336.286-.31 1.014-1.107 1.19-1.304.085-.095.267-.295.404-.442.93-1 .906-.96.79-1.384-.023-.08-.085-.44-.124-.712a6.077 6.077 0 00-.05-.315 20.423 20.423 0 00-.051-.301c-.033-.191-.073-.443-.08-.507-.015-.154-.069-.182-.152-.08a6.25 6.25 0 01-.174.198c-.064.07-.195.221-.289.334l-.211.249-.263.3a188.475 188.475 0 01-.512.591c-.022.027-.168.194-.534.612-.034.038-.111.13-.171.204a7.94 7.94 0 01-.262.301 2.547 2.547 0 00-.171.199c-.017.03-.262.315-.503.584-.065.073-.172.195-.237.273-.065.077-.173.203-.241.28l-.123.139.013-.16c.007-.09.02-.192.028-.23.017-.077.026-.145.06-.438.012-.113.03-.255.039-.315.009-.06.027-.202.04-.315.012-.113.029-.249.037-.302.008-.052.027-.2.042-.328.015-.128.032-.258.037-.288.005-.03.017-.135.027-.233.01-.098.035-.301.055-.452.037-.282.086-.668.155-1.219.086-.695.123-.981.148-1.166.025-.18.016-.289-.024-.283a.743.743 0 00-.09.03m-24.706 3.092c-.08.012-.245.035-.368.05-.259.033-.465.07-.585.108a12.6 12.6 0 00-.728.247c-.227.1-.5.24-.653.337a2.35 2.35 0 01-.176.105c-.012 0-.257.17-.274.191a2.222 2.222 0 01-.164.123.768.768 0 00-.151.123c0 .01-.033.038-.073.062-.197.121-.998 1.023-1.093 1.23-.013.029-.034.052-.046.052-.012 0-.022.019-.022.042 0 .023-.018.05-.04.058-.022.009-.04.028-.04.043a1.7 1.7 0 01-.127.25c-.155.272-.293.568-.293.63 0 .025-.01.045-.025.045-.013 0-.033.044-.042.097-.01.053-.027.102-.038.11-.012.007-.03.062-.039.122-.01.06-.028.116-.04.124-.012.008-.03.07-.04.137-.01.068-.028.13-.04.137a.638.638 0 00-.04.206c-.01.105-.026.19-.037.19-.012 0-.029.112-.04.247-.01.136-.027.253-.039.26-.012.009-.03.131-.04.275-.01.143-.028.266-.04.274-.01.007-.029.149-.039.314-.01.166-.027.302-.038.302s-.029.132-.04.294c-.01.162-.026.307-.035.322-.016.026-.036.191-.116.972-.018.174-.04.328-.05.343-.008.015-.025.16-.035.322-.01.162-.028.301-.04.308-.01.007-.028.149-.039.315-.01.166-.028.308-.04.315-.01.007-.029.143-.039.301-.01.158-.028.288-.039.288-.01 0-.028.139-.038.308-.01.17-.027.32-.037.336-.016.025-.036.191-.116.931-.017.166-.04.314-.049.329a2.148 2.148 0 00-.036.328c-.01.166-.03.316-.044.335-.013.017-.021.067-.016.11l.008.076 1.034.007c1.146.008 1.106.014 1.106-.173 0-.065.01-.125.024-.134.012-.008.031-.15.042-.316.01-.166.028-.308.04-.316.011-.008.03-.15.04-.315.01-.166.028-.308.039-.315.011-.007.029-.155.039-.328.01-.173.028-.315.04-.315.01 0 .028-.136.038-.302.01-.166.029-.308.04-.315.012-.008.03-.15.04-.315.01-.166.03-.309.042-.317.012-.008.023-.05.023-.095 0-.097.01-.099.115-.017.343.27 1.21.676 1.444.676.036 0 .069.01.073.024.03.085 1.295.129 1.769.062.13-.019.257-.036.282-.038.025-.002.046-.013.046-.023s.073-.025.162-.035a.626.626 0 00.19-.042.383.383 0 01.12-.044c.051-.01.105-.03.119-.041a.403.403 0 01.117-.041.801.801 0 00.26-.105.456.456 0 01.11-.046c.033 0 .556-.268.575-.294a.54.54 0 01.113-.073c.422-.224 1.217-.981 1.642-1.564.11-.15.21-.278.221-.283.012-.005.022-.022.022-.037 0-.016.051-.11.114-.21.063-.1.143-.244.177-.32a.607.607 0 01.083-.145c.01-.005.02-.021.02-.036 0-.014.039-.115.087-.224.048-.108.126-.326.172-.485l.11-.374c.015-.048.034-.153.042-.233a.705.705 0 01.034-.173c.053-.079.058-1.453.005-1.699l-.075-.356c-.115-.54-.479-1.347-.73-1.618a11.58 11.58 0 01-.25-.31c-.132-.177-.848-.728-1.083-.832-.04-.018-.072-.04-.072-.051 0-.011-.036-.028-.08-.038-.043-.01-.078-.03-.078-.043 0-.014-.015-.026-.033-.026a.567.567 0 01-.138-.054.53.53 0 00-.145-.054.113.113 0 01-.066-.024 1.327 1.327 0 00-.248-.085 11.047 11.047 0 01-.307-.087 1.961 1.961 0 00-.315-.043 1.17 1.17 0 01-.258-.035c-.037-.028-.548-.027-.722 0m10.737.002a.65.65 0 01-.206.026c-.094 0-.23.013-.302.026-.312.057-.425.08-.512.106l-.25.074a5.89 5.89 0 00-.664.257c-.024.014-.11.057-.189.096a4.996 4.996 0 00-.516.299 8.743 8.743 0 00-.64.48 1.59 1.59 0 01-.105.095 5.23 5.23 0 00-.512.521c-.043.057-.102.13-.131.164a3.667 3.667 0 00-.301.4.978.978 0 00-.08.124c-.035.06-.076.122-.09.138a.828.828 0 00-.08.137.863.863 0 01-.086.144.136.136 0 00-.033.076c0 .021-.012.039-.026.039-.014 0-.026.013-.026.03 0 .016-.04.117-.088.225-.152.338-.175.396-.175.44 0 .025-.01.044-.024.044-.013 0-.032.053-.042.117a.478.478 0 01-.042.147c-.024.03-.053.154-.113.479-.019.1-.042.194-.05.209-.015.024-.074.855-.072 1.007.002.193.058.793.077.83.013.026.032.111.042.19.01.08.028.15.04.158.012.008.03.075.04.15.01.076.028.138.041.138.013 0 .024.02.024.043 0 .044.012.075.142.367.084.191.225.448.285.52.025.031.046.064.046.074 0 .009.044.074.098.143l.15.195c.278.367.846.838 1.275 1.058.33.17.465.228.678.297.178.057.341.094.556.127.094.014.221.038.283.053.145.034.943.034 1.09 0 .06-.014.194-.038.295-.052a4.483 4.483 0 001.024-.28l.17-.074c.066-.03.14-.06.166-.07.088-.032.115-.17.204-1.045.015-.151.038-.311.051-.356.014-.046.033-.203.042-.35.01-.147.026-.267.035-.267.01 0 .02-.046.024-.103.006-.106.047-.465.073-.643.017-.117-.047-.146-.125-.055-.097.114-.361.363-.385.363-.014 0-.04.018-.058.04-.045.058-.407.284-.486.305-.036.009-.065.027-.065.04 0 .013-.042.031-.093.041-.05.01-.098.028-.105.041-.007.013-.067.031-.131.041-.065.01-.118.028-.118.04s-.062.03-.138.041a.498.498 0 00-.172.049c-.048.04-.907.04-.954 0a.424.424 0 00-.15-.049.73.73 0 01-.184-.057.32.32 0 00-.116-.039c-.025 0-.045-.012-.045-.027s-.014-.028-.03-.028c-.047 0-.26-.116-.26-.142 0-.012-.015-.022-.035-.022-.02 0-.062-.025-.096-.055a.29.29 0 00-.076-.055c-.03-.001-.306-.288-.41-.424a2.482 2.482 0 00-.12-.15.224.224 0 01-.035-.076c-.01-.034-.03-.062-.043-.062-.014 0-.025-.012-.025-.027s-.034-.1-.076-.191a1.341 1.341 0 01-.095-.282.459.459 0 00-.049-.155c-.04-.053-.041-1.157 0-1.21a.521.521 0 00.048-.173.788.788 0 01.042-.178 1.8 1.8 0 00.13-.349c0-.02.01-.037.02-.037.011 0 .048-.062.083-.137.034-.076.072-.137.085-.137.012 0 .022-.018.022-.04 0-.02.015-.055.033-.075.018-.02.062-.08.097-.132.093-.136.1-.145.31-.363.21-.22.218-.227.348-.323a2.121 2.121 0 01.47-.3c.016 0 .03-.01.03-.024 0-.013.04-.033.091-.042.05-.01.092-.03.092-.044 0-.014.047-.034.105-.044.058-.01.105-.027.105-.04 0-.012.056-.03.125-.04.068-.011.13-.03.138-.042a.576.576 0 01.197-.04.99.99 0 00.238-.044c.094-.047.902.02 1.012.085a.574.574 0 00.138.044c.053.01.096.03.096.043 0 .013.013.024.03.024.04 0 .263.115.306.158.02.018.044.034.055.034.076 0 .58.613.58.706 0 .018.011.033.024.033.014 0 .032.037.042.083.009.045.028.082.04.082.013 0 .03.043.04.096.01.052.027.095.039.095.011 0 .029.05.038.11.01.06.028.116.04.123a.55.55 0 01.04.185.71.71 0 00.042.202c.04.052.057.876.025 1.188-.043.414-.098.894-.147 1.288-.024.188-.059.472-.077.63a3.987 3.987 0 01-.04.288c-.009 0-.024.116-.054.397-.015.143-.045.402-.067.575l-.08.644c-.023.18-.043.39-.045.466l-.004.136 1.044.007c.978.007 1.046.004 1.06-.04a.683.683 0 01.035-.092 1.76 1.76 0 00.04-.315c.011-.15.029-.284.04-.3a1.68 1.68 0 00.04-.322c.01-.162.028-.3.04-.308.01-.007.028-.145.038-.308.01-.161.028-.306.04-.321.011-.015.029-.16.04-.323.01-.162.027-.3.039-.308.011-.007.029-.146.04-.308.01-.162.027-.306.038-.322.011-.015.029-.156.04-.314.01-.159.026-.3.035-.316.016-.025.045-.283.106-.917.02-.222.057-.831.054-.918-.009-.281-.057-.822-.075-.834-.013-.008-.032-.086-.042-.173-.01-.086-.028-.157-.04-.157-.01 0-.028-.056-.037-.123-.01-.068-.03-.124-.043-.124-.013 0-.024-.019-.024-.042 0-.038-.041-.146-.138-.369a7.306 7.306 0 00-.307-.547 1.749 1.749 0 01-.093-.138c-.097-.152-.757-.846-.874-.918-.047-.028-.085-.062-.085-.074 0-.011-.013-.021-.028-.021a.375.375 0 01-.12-.072 2.265 2.265 0 00-.378-.234 1.896 1.896 0 01-.262-.133c-.024-.026-.535-.186-.78-.245-.293-.07-1.176-.127-1.246-.08m8.637.233a2.542 2.542 0 01-.324.04c-.171.016-.318.038-.325.05-.007.012-.06.03-.116.042a.65.65 0 00-.144.043 5.873 5.873 0 01-.24.113c-.108.049-.21.105-.226.125-.016.02-.04.036-.052.036-.032 0-.299.19-.381.274a16.87 16.87 0 01-.17.167c-.46.445-.877 1.252-.878 1.7 0 .05-.013.14-.029.2-.016.059-.038.194-.05.3-.011.107-.029.243-.038.304a8.19 8.19 0 00-.04.301 9.3 9.3 0 01-.035.274c-.007.045-.02.162-.03.26-.01.098-.033.301-.053.452l-.078.603c-.044.363-.059.474-.08.616a9.613 9.613 0 00-.038.302c-.013.113-.03.248-.039.3a8.016 8.016 0 00-.04.316c-.014.12-.03.25-.036.287a6.303 6.303 0 00-.028.233 19.4 19.4 0 01-.055.452 109.205 109.205 0 00-.156 1.233c-.063.497-.076.635-.07.72.002.044.073.047 1.086.047 1.265 0 1.134.043 1.163-.386.01-.157.028-.297.039-.313.011-.015.029-.16.04-.322.01-.162.027-.3.038-.308.011-.007.03-.149.04-.314.01-.167.027-.308.039-.316.011-.007.029-.149.04-.315.01-.166.027-.307.038-.315.012-.007.03-.149.04-.315.01-.166.028-.308.04-.315.011-.007.029-.143.04-.301.01-.159.027-.294.039-.302.01-.007.029-.155.039-.328.01-.173.028-.315.039-.315s.029-.136.04-.302c.01-.166.027-.307.038-.315.012-.007.03-.148.04-.314.01-.166.028-.308.039-.315.011-.007.029-.146.04-.308.01-.162.027-.307.038-.323.011-.015.029-.13.04-.257.01-.126.028-.25.042-.274.013-.024.036-.075.05-.112.056-.146.227-.34.329-.374a.148.148 0 00.07-.048c.014-.02.263-.033.802-.039.89-.009.848.003.848-.241 0-.08.01-.151.023-.16.013-.007.032-.15.042-.316.01-.166.028-.308.04-.315.01-.007.028-.146.039-.308.01-.162.03-.308.042-.325.013-.016.027-.176.03-.355l.007-.326-.818-.006c-.45-.003-.824 0-.83.007m-18.97 2.062c.008.014.09.033.185.044.094.01.177.029.184.042.007.012.06.03.118.04.058.011.105.03.105.044 0 .014.014.025.03.025.03 0 .26.111.286.137.028.03.182.137.197.137.127 0 .708.815.761 1.068.01.046.027.083.038.083.012 0 .03.064.04.143.01.079.031.16.049.182.042.054.043.965 0 1.02a.544.544 0 00-.048.182c-.01.08-.03.15-.042.16-.013.007-.024.04-.024.07 0 .054-.072.245-.146.384a.335.335 0 00-.038.102c0 .037-.16.315-.19.327-.01.005-.02.022-.02.037 0 .063-.577.707-.633.707-.01 0-.035.016-.054.036-.083.084-.295.238-.328.238-.02 0-.035.011-.035.025 0 .013-.03.032-.066.041-.036.01-.066.03-.066.045a.026.026 0 01-.026.026 1.1 1.1 0 00-.187.082c-.089.045-.201.09-.25.1-.049.008-.095.027-.102.04-.007.012-.07.03-.138.04a.456.456 0 00-.159.048c-.047.04-.907.04-.954 0a.491.491 0 00-.173-.049c-.076-.01-.145-.03-.153-.044-.008-.014-.032-.025-.054-.025-.04 0-.234-.082-.351-.149l-.154-.088c-.222-.127-.605-.528-.715-.747-.03-.062-.066-.112-.078-.112-.012 0-.03-.043-.04-.095-.009-.053-.027-.096-.04-.096-.011 0-.03-.044-.039-.097-.01-.052-.027-.102-.039-.11-.012-.008-.03-.072-.04-.143a.582.582 0 00-.037-.157c-.036-.049-.054-.569-.028-.78.04-.32.086-.549.11-.549.013 0 .023-.034.023-.075 0-.041.017-.108.037-.149a.786.786 0 00.054-.157c.01-.047.028-.084.04-.084s.03-.037.04-.083c.01-.045.027-.082.038-.082.012 0 .03-.033.04-.075.01-.041.026-.081.037-.089a.785.785 0 00.082-.123c.148-.256.648-.809.73-.809.015 0 .031-.01.036-.022.024-.06.568-.388.646-.388.018 0 .032-.011.032-.025 0-.013.041-.032.091-.042a.698.698 0 00.164-.058.338.338 0 01.128-.04c.03 0 .065-.012.08-.027a.525.525 0 01.19-.045c.09-.01.17-.029.177-.041.018-.031.66-.03.679 0m30.038 6.626l.008.103.164.008.164.008.007.485.007.485.111.008.112.008v-.987l.177-.008.177-.008v-.192l-.467-.008-.468-.007.008.103m1.098.503v.604l.112-.008.111-.008.007-.383c.007-.356.01-.377.046-.305a.39.39 0 01.039.103c0 .027.088.248.13.328.013.025.032.09.042.144.036.2.197.169.279-.052.028-.075.067-.175.088-.223a.474.474 0 00.039-.112c0-.014.015-.062.035-.105l.064-.148c.022-.054.029.022.03.35l.002.42.112-.008.111-.008.007-.596.007-.596h-.171c-.163 0-.174.004-.202.075-.016.042-.045.115-.065.162a.499.499 0 00-.036.113.384.384 0 01-.039.106.376.376 0 00-.039.126c0 .026-.012.048-.026.048-.015 0-.027.024-.027.053 0 .124-.05.069-.119-.129a2.376 2.376 0 00-.09-.239 1.334 1.334 0 01-.068-.171l-.048-.144h-.331v.604'
            transform='translate(-89.234 -135.381)'></path>
          <path
            d='M129.058 135.41c-.107.036-.325.16-.417.236-.153.128-.436.481-.436.545a.04.04 0 01-.022.036c-.032.013-.214.371-.214.42 0 .023-.012.04-.027.04-.014 0-.026.022-.026.049a.369.369 0 01-.039.125.818.818 0 00-.055.212c-.01.075-.027.135-.039.135s-.03.087-.04.192c-.01.106-.027.192-.038.192-.012 0-.03.11-.04.246-.01.136-.027.247-.038.247-.01 0-.028.105-.038.233-.01.128-.029.239-.04.246a.713.713 0 00-.04.22.74.74 0 01-.04.219.824.824 0 00-.039.233c-.01.12-.028.225-.04.233-.012.008-.03.112-.04.233-.01.12-.028.218-.039.218s-.029.105-.039.233c-.01.128-.027.233-.039.233-.01 0-.028.105-.038.233-.01.128-.028.238-.04.246-.011.007-.029.109-.04.226-.01.117-.027.225-.038.24a.805.805 0 00-.039.202c-.023.223-.098.305-.318.348-.05.01-.097.028-.105.041-.008.013-.073.032-.144.042-.072.01-.13.028-.13.04 0 .011-.048.03-.105.04-.058.01-.111.028-.12.041-.007.013-.066.032-.131.042-.065.01-.124.029-.131.041-.007.013-.067.031-.131.041-.065.01-.118.028-.118.04s-.053.03-.118.04c-.065.01-.118.028-.118.04 0 .013-.053.032-.118.042-.064.01-.123.028-.13.04-.008.013-.067.032-.132.042-.065.01-.124.029-.132.042-.008.014-.068.033-.132.043-.065.01-.118.029-.118.041 0 .013-.053.03-.118.041-.065.01-.125.029-.132.04-.007.013-.06.03-.117.04-.058.011-.111.03-.12.043-.007.013-.066.032-.13.042-.065.01-.118.028-.118.04 0 .01-.053.029-.118.039-.065.01-.118.028-.118.04 0 .013-.048.03-.107.04a.617.617 0 00-.15.044 1.935 1.935 0 01-.243.083c-.108.032-.217.069-.241.083a.605.605 0 01-.151.043c-.059.01-.107.027-.107.039 0 .011-.04.028-.09.038a.697.697 0 00-.164.058.327.327 0 01-.12.04c-.025 0-.046.012-.046.028 0 .015-.023.027-.05.027a.143.143 0 00-.09.04.268.268 0 01-.106.057c-.038.01-.069.028-.069.04s-.03.03-.066.039c-.036.009-.065.029-.065.044 0 .014-.014.027-.03.027a.545.545 0 00-.151.102c-.533.451-.71 1-.514 1.587.12.357.641 1.05.79 1.05.018 0 .036.01.04.022.013.032.32.225.358.225.018 0 .032.012.032.027s.013.027.029.027c.03 0 .1.031.409.182.104.05.198.092.21.092.012 0 .093.036.18.08.14.072.27.135.594.286a.518.518 0 00.125.045c.016 0 .029.012.029.028 0 .015.017.027.039.027.047 0 .286.115.298.144.005.011.028.02.052.021a.52.52 0 01.15.054c.057.03.12.053.137.054.018 0 .033.013.033.028 0 .015.02.028.043.028.043 0 .274.108.298.14a.307.307 0 00.106.038.38.38 0 01.125.048c.024.02.043.02.065-.003a.117.117 0 01.07-.032c.035 0 .742-.463.835-.546.017-.016.042-.028.055-.028.02 0 .06-.03.181-.137.018-.015.042-.028.055-.028.02 0 .06-.03.182-.136.017-.016.038-.028.047-.028.01 0 .136-.082.283-.183l.483-.328c.312-.212.314-.198-.05-.364a.755.755 0 00-.15-.057.192.192 0 01-.074-.026 1.94 1.94 0 00-.316-.138c-.022 0-.15-.057-.243-.108a.627.627 0 00-.125-.041c-.046-.01-.084-.031-.084-.045 0-.014-.01-.023-.02-.02a.587.587 0 01-.203-.06 7.608 7.608 0 00-.42-.18 2.267 2.267 0 01-.198-.086.298.298 0 00-.095-.035.349.349 0 01-.105-.041.338.338 0 00-.121-.041c-.026 0-.046-.012-.046-.026 0-.013-.037-.033-.08-.043a.704.704 0 01-.152-.057.318.318 0 00-.116-.039c-.026 0-.046-.012-.046-.027s-.048-.035-.105-.044c-.058-.01-.105-.028-.105-.04 0-.011-.039-.03-.086-.04a.357.357 0 01-.118-.047.357.357 0 00-.118-.048l-.085-.02.078-.034a7.69 7.69 0 01.782-.264c.04-.01.079-.028.087-.041.008-.014.042-.025.077-.025.034 0 .069-.01.077-.024.008-.013.059-.033.113-.043.054-.01.21-.056.348-.103l.473-.161c.123-.042.261-.084.308-.094.047-.01.092-.029.1-.043.008-.013.036-.025.062-.025.026 0 .194-.05.373-.11.302-.103.543-.182 1.18-.39.59-.193.571-.17.645-.76a1.02 1.02 0 01.03-.164c.023-.06.022-.055.043-.247.011-.098.031-.215.045-.26.013-.046.035-.169.05-.274.021-.168.058-.39.118-.726l.04-.233.037-.205.04-.233c.014-.09.032-.195.04-.233.008-.038.026-.142.04-.233.013-.09.03-.195.04-.233.007-.037.025-.136.038-.219a27.807 27.807 0 01.152-.898l.013-.09.062.071a.338.338 0 01.063.086c0 .028.193.351.215.36.012.006.022.023.022.038 0 .037.187.362.215.374.011.005.021.025.021.046 0 .02.015.053.033.073.018.02.05.072.072.116.076.155.091.18.111.18.011 0 .02.018.02.04 0 .02.015.055.033.075a.62.62 0 01.073.116c.075.155.09.18.11.18.012 0 .02.018.02.04 0 .02.016.055.034.075.018.02.062.095.097.166.036.072.073.13.083.13.01 0 .025.03.034.068.009.038.027.069.04.069.013 0 .031.036.04.08.01.044.034.087.055.095.02.008.038.034.038.057s.012.042.026.042c.015 0 .026.018.026.039a.13.13 0 00.035.075c.033.036.078.135.07.158-.002.006.014.022.037.035.023.013.042.042.042.064s.012.04.026.04c.015 0 .027.017.027.039 0 .021.015.055.034.075.034.036.078.135.07.157-.002.006.015.023.038.036.023.013.042.042.042.064s.012.04.026.04c.014 0 .026.018.026.039 0 .022.015.055.033.075a.64.64 0 01.072.116c.066.133.186.242.248.226l.238-.058a2.26 2.26 0 00.408-.124.793.793 0 01.158-.04.49.49 0 00.143-.042.565.565 0 01.164-.04c.076-.011.138-.03.138-.042 0-.012.065-.03.144-.04.08-.01.15-.03.158-.042.007-.013.073-.031.145-.042.072-.01.137-.029.145-.041.007-.013.078-.032.157-.042.08-.01.144-.028.144-.04s.065-.03.145-.04c.08-.01.144-.029.144-.041s.065-.03.144-.041c.08-.01.15-.03.158-.042.008-.013.079-.032.158-.043.08-.01.144-.028.144-.04 0-.011.065-.03.145-.04.08-.01.144-.028.144-.04 0-.013.065-.031.144-.042.08-.01.15-.028.157-.04.007-.013.07-.032.139-.043a.5.5 0 00.151-.04.526.526 0 01.155-.041c.07-.01.147-.03.17-.044a.793.793 0 01.167-.049l.125-.025-.085.113c-.047.061-.12.151-.164.2-.044.048-.126.15-.184.227a4.738 4.738 0 01-.217.263.723.723 0 00-.111.144c0 .011-.021.04-.046.063a1.3 1.3 0 00-.118.139c-.04.053-.111.14-.158.192a5.522 5.522 0 00-.177.214c-.106.135-.201.252-.276.34-.03.034-.1.122-.158.195a2.037 2.037 0 01-.15.175c-.026.023-.047.052-.047.064 0 .013-.027.05-.06.083a5.344 5.344 0 00-.225.266c-.145.18-.359.44-.437.53a6.447 6.447 0 00-.132.168 3.048 3.048 0 01-.158.192c-.205.212-.307.483-.209.556.027.02.07.102.325.622.081.166.154.308.161.315.007.008.042.075.077.15.035.076.07.144.078.152.008.008.067.118.13.246.329.675.41.837.424.85.009.007.044.078.08.157.035.079.072.144.082.144.01 0 .025.037.035.082.009.045.027.082.039.082.011 0 .03.034.039.075.01.041.026.081.036.089.01.008.065.113.122.233.058.12.111.225.119.233.01.01.168.336.202.415.004.01-.037.006-.091-.01a10.43 10.43 0 00-.23-.058.883.883 0 01-.157-.05.545.545 0 00-.118-.036 3.21 3.21 0 01-.21-.055l-.276-.082a3.492 3.492 0 01-.197-.062c-.059-.024-.056-.023-.19-.046-.07-.012-.125-.032-.125-.044 0-.012-.066-.031-.145-.041-.08-.01-.151-.03-.159-.043-.008-.013-.073-.031-.145-.041-.072-.01-.137-.029-.144-.042-.008-.013-.036-.024-.061-.024-.026 0-.128-.025-.228-.056s-.247-.075-.326-.097l-.273-.081a.882.882 0 00-.194-.04h-.067l.018.266c.01.146.028.278.04.294a.927.927 0 01.042.235c.01.113.028.218.04.233.01.015.028.129.039.253.01.125.028.232.04.24.01.007.029.115.039.24.01.124.027.238.038.253a.706.706 0 01.037.185c.02.18.077.26.208.285a.358.358 0 01.11.037c.015.012.077.03.138.04.062.01.118.03.125.042.007.012.064.031.125.041.062.011.124.03.138.04.014.013.076.03.138.041.061.01.117.03.124.041.007.012.066.03.131.04.065.01.124.03.132.043.008.014.068.033.132.043.065.01.124.029.132.041.007.013.066.031.131.041.065.01.124.029.131.04.007.013.06.03.118.041.057.01.11.028.118.04.007.013.072.032.144.042.073.01.132.03.132.041 0 .013.05.031.111.042.062.01.124.029.138.04.015.012.077.03.138.04.061.011.118.03.125.043.008.013.067.032.132.042.065.01.124.029.131.041.007.013.07.032.138.042.068.01.13.03.139.043.008.013.126.031.262.04.137.01.26.026.275.037.028.02.04.019.392-.025.13-.016.247-.041.262-.056a.102.102 0 01.064-.027c.041 0 .263-.108.31-.151.016-.015.055-.046.088-.069.182-.127.499-.547.499-.662 0-.027.01-.05.022-.05.013 0 .038-.077.056-.171.043-.222.064-.678.032-.678-.013 0-.031-.064-.04-.142a.463.463 0 00-.043-.17.122.122 0 01-.027-.073c0-.026-.094-.236-.208-.467l-.296-.6a2.108 2.108 0 00-.101-.192 1.29 1.29 0 01-.078-.157.464.464 0 00-.083-.144c-.01 0-.026-.037-.035-.082-.01-.045-.027-.082-.039-.082-.011 0-.03-.034-.04-.075a.243.243 0 00-.035-.09c-.02-.016-.054-.08-.28-.534-.089-.18-.201-.403-.249-.493-.048-.09-.16-.312-.25-.493l-.314-.627c-.172-.343-.172-.377-.013-.549a.683.683 0 00.104-.128.41.41 0 01.072-.098c.113-.127.221-.257.335-.404.057-.075.14-.174.183-.222.044-.047.136-.158.206-.248a9.55 9.55 0 01.386-.475c.036-.04.113-.133.17-.207.058-.075.123-.155.144-.18.022-.023.083-.098.136-.165l.144-.18c.027-.031.096-.116.154-.189l.22-.27c.391-.478.416-.509.497-.618a2.89 2.89 0 01.15-.181c.103-.115.305-.362.352-.434a.42.42 0 01.056-.07c.036-.028.209-.276.209-.3 0-.014.009-.03.02-.034.03-.014.137-.234.137-.282 0-.023.011-.042.024-.042.073 0 .113-.77.052-1-.116-.44-.947-.76-1.582-.611a27.432 27.432 0 00-.647.166 5.39 5.39 0 01-.368.103 38.112 38.112 0 00-.893.246c-.231.061-.5.135-.643.178-.274.081-.34.099-.394.105a.227.227 0 00-.08.023.666.666 0 01-.143.037.78.78 0 00-.157.04 1.13 1.13 0 01-.159.053c-.374.098-.541.148-.565.168a.535.535 0 01-.164.041c-.076.011-.137.029-.137.04 0 .012-.071.03-.158.041-.087.01-.158.029-.158.04 0 .012-.064.03-.144.041-.08.01-.144.03-.144.044 0 .014-.03.026-.066.026-.068 0-.17-.074-.17-.123a.8.8 0 00-.093-.175.862.862 0 01-.092-.17.025.025 0 00-.024-.025c-.014 0-.033-.028-.043-.062a1.025 1.025 0 00-.097-.185 4.304 4.304 0 01-.16-.274 3.316 3.316 0 00-.133-.233 2.132 2.132 0 01-.174-.309.983.983 0 00-.087-.152.746.746 0 01-.125-.217c-.016-.041-.037-.075-.047-.075-.01 0-.046-.053-.078-.117-.072-.144-.117-.222-.138-.24a.892.892 0 01-.075-.143c-.033-.072-.07-.13-.084-.13-.013 0-.017-.013-.009-.028.01-.015.004-.027-.011-.027-.016 0-.028-.017-.028-.039 0-.021-.01-.043-.022-.048a3.14 3.14 0 01-.214-.351c-.276-.491-.508-.83-.714-1.04-.342-.348-.506-.423-.94-.432-.217-.004-.366.006-.435.03'
            transform='translate(-89.234 -135.381)'></path>
        </g>
      </svg>
    );
  }
}
