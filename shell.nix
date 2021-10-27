# save this as shell.nix
{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  nativeBuildInputs = [ 
    pkgs.yarn
    pkgs.nodejs_latest
  ];
}
