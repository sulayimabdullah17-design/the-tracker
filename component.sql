-- الأعمدة الأكثر استعلاماً في التطبيق
CREATE INDEX idx_readings_asset_date   ON readings(asset_id, date DESC);
CREATE INDEX idx_failures_asset_date   ON failures(asset_id, date DESC);
CREATE INDEX idx_plans_asset_due       ON plans(asset_id, due_date);
CREATE INDEX idx_plans_due             ON plans(due_date) WHERE extended = false;
CREATE INDEX idx_maintenance_asset     ON maintenance(asset_id, date DESC);
CREATE INDEX idx_phases_asset_status   ON phases(asset_id, status);
CREATE INDEX idx_attachments_asset     ON attachments USING GIN(asset_ids);
CREATE INDEX idx_assets_archived       ON assets(archived) WHERE archived = false;