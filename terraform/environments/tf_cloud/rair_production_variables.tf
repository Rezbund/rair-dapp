resource "tfe_variable" "rair_prod_HCP_CLIENT_SECRET" {
  key = "HCP_CLIENT_SECRET"
  description = "HCP_CLIENT_SECRET"
  workspace_id = tfe_workspace.rair_production.id
  category = var.tf_variable_types.ENV
  sensitive = true
}

resource "tfe_variable" "rair_prod_HCP_CLIENT_ID" {
  key = "HCP_CLIENT_ID"
  description = "HCP_CLIENT_ID"
  workspace_id = tfe_workspace.rair_production.id
  category = var.tf_variable_types.ENV
  sensitive = true
}

resource "tfe_variable" "rair_prod_MONGODB_ATLAS_PRIVATE_KEY" {
  key = "MONGODB_ATLAS_PRIVATE_KEY"
  description = "MONGODB_ATLAS_PRIVATE_KEY"
  workspace_id = tfe_workspace.rair_production.id
  category = var.tf_variable_types.ENV
  sensitive = true
}

resource "tfe_variable" "rair_prod_MONGODB_ATLAS_PUBLIC_KEY" {
  key = "MONGODB_ATLAS_PUBLIC_KEY"
  description = "MONGODB_ATLAS_PUBLIC_KEY"
  workspace_id = tfe_workspace.rair_production.id
  category = var.tf_variable_types.ENV
  sensitive = true
}

resource "tfe_variable" "rair_prod_gcp_tf_admin_service_account_json" {
  key = "gcp_tf_admin_service_account_json"
  description = "gcp_tf_admin_service_account_json"
  workspace_id = tfe_workspace.rair_production.id
  category = var.tf_variable_types.TERRAFORM
  sensitive = true
}
