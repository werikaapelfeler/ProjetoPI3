//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SensorMed.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Endereco
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Endereco()
        {
            this.Sensor = new HashSet<Sensor>();
        }
    
        public int cd_ender { get; set; }
        public string nm_ender { get; set; }
        public Nullable<int> CEP { get; set; }
        public Nullable<int> numero { get; set; }
        public string descricao { get; set; }
        public int cd_bairro { get; set; }
    
        public virtual Bairro Bairro { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Sensor> Sensor { get; set; }
    }
}
