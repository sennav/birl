{ pkgs, lib, config, inputs, ... }:

{
  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  # https://devenv.sh/basics/
  enterShell = ''
    echo "BIRRRRLLL"
  '';
}
