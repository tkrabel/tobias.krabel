# Jupyter

## Jupyter notebook

```bash
jupyter notebook stop <port>  # shut down server

jupyter nbextension list
jupyter nbextension install <extension_name>
jupyter nbextension enable <extension_name>

jupyter kernelspec uninstall <venv_name>  # uninstall kernel
```

## JupyterLab

```bash
jupyter labextension list

jupyter labextension install <extension_name>@<version>
jupyter labextension install <extension_name>@<version> --no-build
jupyter labextension build

jupyter labextension enable <extension_name>@<version>

```