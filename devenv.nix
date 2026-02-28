{ pkgs, lib, config, inputs, ... }:

{
  packages = [
    pkgs.git
    pkgs.neovim
  ];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  # https://devenv.sh/basics/
  enterShell = ''
    echo "BIRRRRLLL"
  '';
}
