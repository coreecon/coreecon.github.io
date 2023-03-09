# CoreEcon Interactive tools
Repository for all [CoreEcon](www.core-econ.org) interactive and coding   

## Voici builder

## 📦 How to install extra packages

You can pre-install extra packages for xeus-python by adding them to the ``environment.yml`` file.

Only ``no-arch`` packages from ``conda-forge`` and packages from ``emscripten-forge`` can be installed.

For example, if you want to create a Voici deployment with NumPy and Matplotlib pre-installed, you would need to edit the ``environment.yml`` file as following:

```yml
name: voici
channels:
  - https://repo.mamba.pm/emscripten-forge
  - https://repo.mamba.pm/conda-forge
dependencies:
  - numpy
  - matplotlib
```
