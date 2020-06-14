# Handling virtual environments

## Conda virtual environments

### Creating a conda venv

``` bash
conda create -n <venv_name> python=3.7 -y
conda activate <venv_name>

conda install pip -y
conda install ipykernel -y

python -m ipykernel install --user --name <venv_name>  # Add the IPython kernel to Jupyter
```

### Delete conda venv

``` bash
conda env remove --name <venv_name>

jupyter kernelspec uninstall <venv_name>
```